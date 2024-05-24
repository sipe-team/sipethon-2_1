import os
import json
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain_community.chat_models import ChatOpenAI
from langchain.callbacks import get_openai_callback
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

from openai import OpenAI


class QAManager:

    def __init__(self):
        """
        QAService 클래스 초기화
        """
        self.embedding = OpenAIEmbeddings()
        self.api_key = os.environ.get("OPENAI_QA_API_KEY")

    def load_vector_db(self):
        """
        벡터 데이터베이스를 로그하여 검색 엔진으로 사용할 수 있게 준비

        @return - 검색을 위한 retriever 객체
        """
        vectordb = FAISS.load_local(
            folder_path="./app/data/db/faiss",
            embeddings=self.embedding,
            allow_dangerous_deserialization=True,
        )
        return vectordb

    def similarity_search(self, query):
        """
        주어진 쿼리에 대해 유사한 문서를 검색하고 그 결과를 반환합니다.

        매개변수:
        - query: 사용자로부터 받은 쿼리 문자열

        반환값:
        - 검색 결과가 담긴 JSON 객체
        """
        vector_db = self.load_vector_db()  # 벡터 DB 로드
        similar_docs = vector_db.similarity_search(query)  # 유사한 문서 검색
        return similar_docs

    def process_response(self, data):
        page_contents = [item.dict().get("page_content") for item in data]

        # 모든 데이터에 대해 변환 수행
        parsed_data = [
            self._parse_content_to_json(content) for content in page_contents
        ]

        # JSON 형태로 출력
        # json_data = json.dumps(parsed_data, ensure_ascii=False)
        return parsed_data

    async def qacall(self, data):
        """
        주어진 쿼리에 대해 QA 체인을 실행하고 응답을 처리한 후 그 결과를 반환합니다.

        매개변수:
        - query: 사용자로부터 받은 쿼리 문자열

        반환값:
        - 처리된 응답 데이터와 소스 문서 정보가 담긴 JSON 객체
        """
        
        query = self.summary(data)
        
        data = self.similarity_search(query)

        response = self.process_response(data)[0]

        print(response)

        _response = self.translate(response)

        return _response

    def conversation(self, data):
        client = OpenAI(api_key=self.api_key)
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": """
                너는 지금부터 향수 전문가야. 나에게 맞는 향수를 찾기 위한 질문을 계속해.
                
                [규칙]
                - 말 끝을 무조건 '냥'으로 끝나게 해.
                - 귀여운 말투를 써.
                - 질문은 무조건 처음 4번만 해.
                - 특정 브랜드 제품을 절대 답변하지 마. 답변하면 벌칙이 있어.
                - 너가 5번째로 답변할 때는 절대 질문하지 말고 결과 페이지로 들어가라고 말해.
              """,
                        }
                    ],
                },
                *data,
            ],
            temperature=1,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
        )
        return response.choices[0].message.content

    def translate(self, data):
        """
        주어진 데이터를 한국어로 번역합니다.

        매개변수:
        - data: 번역할 데이터

        반환값:
        - 번역된 데이터
        """
        client = OpenAI(api_key=self.api_key)
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": """
                    너는 지금부터 전문 번역가야.
                    
                    [규칙]
                    - key: value 형태로 되어있는 데이터를 받아서 value를 모두 한국어로 변역해.
                    - notes에 있는 데이터는 쉼표로 구분된 여러 개의 텍스트 데이터이니 주의해.
                    - name의 값은 번역하지 말고 무조건 한국어로 발음나는대로 적어. 못 적으면 벌칙이 있어.
                        - ex) Mojave Ghost: 모하비 고스트
                    - name의 값은 번역하지 말고 무조건 한국어로 발음나는대로 적어. 못 적으면 벌칙이 있어.
                        - ex) tobacco: 토바코
                    - imageUrl은 번역 안 해도 돼
                    - 무조건 JSON으로 답해
                """
                }
            ]
            },
            {
            "role": "user",
            "content": [{
                "type": "text",
                "text": json.dumps(data),
            }]
            }
        ],
        response_format={ "type": "json_object"},
        temperature=0,
        max_tokens=500,
        top_p=0,
        frequency_penalty=0,
        presence_penalty=0
        )
        return json.loads(response.choices[0].message.content)

    def summary(self, data):
        client = OpenAI(api_key=self.api_key)
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": """
                                너는 지금부터 전문 요약가야. 받은 데이터를 요약해서 반환해.
                                
                                [규칙]
                                - 입력으로 주어진 맥락들을 요약해.
                                - 무조건 문자열로만 요약해.
                                - 무조건 '~향수'로 끝나게 요약해.
                            """,
                        }
                    ],
                },
                *data,
            ],
            temperature=0,
            max_tokens=256,
            top_p=0,
            frequency_penalty=0,
            presence_penalty=0,
        )
        return response.choices[0].message.content

    def summary_and_expect(self, data):
        client = OpenAI(api_key=self.api_key)
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": """
                    너는 지금부터 전문 요약가야. 받은 데이터를 요약해서 돌려줘.
                    
                    [규칙]
                    - 입력으로 주어진 맥락들을 요약해.
                    - 무조건 문자열로만 요약해.
                    - 사용자가 향수를 뿌렸을 때 느껴질 수 있는 분위기를 요약하고 '~느낌이 날 거예요' 어투로 20글자 이하로 답해.
                    - 사용자가 원하는 향수 재료를 요약해.
                    - 무조건 JSON으로 답해.
                    - 응답 형태 예시대로만 답해. { "atmosphere": "향수를 뿌렸을 때 느껴질 수 있는 분위기", "ingredients": ["사용자가 원하는 향수 재료"] }
                """,
                        }
                    ],
                },
                *data,
            ],
            response_format={"type": "json_object"},
            temperature=0,
            max_tokens=200,
            top_p=0,
            frequency_penalty=0,
            presence_penalty=0,
        )
        return json.loads(response.choices[0].message.content)

    @staticmethod
    def _parse_content_to_json(content):
        lines = content.split("\n")
        # 결과를 저장할 딕셔너리 초기화
        result = {}
        for line in lines:
            # 각 줄을 key와 value로 분리
            try:
                key, value = line.split(":", 1)  # 최대 1번만 분리
            except:
                result["description"] += line[0]
            if key.strip() == "notes":
                result[key.strip()] = value.strip().split(", ")
            # 결과 딕셔너리에 추가
            else:
                result[key.strip()] = value.strip()
        return result
