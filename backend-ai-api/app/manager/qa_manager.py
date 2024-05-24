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

    def __init__(self, db_directory="../db"):
        """
        QAService 클래스 초기화
        """
        self.db_directory = db_directory
        self.embedding = OpenAIEmbeddings()
        self.api_key = os.environ.get("OPENAI_QA_API_KEY")

    def load_vector_db(self):
        """
        벡터 데이터베이스를 로그하여 검색 엔진으로 사용할 수 있게 준비

        @return - 검색을 위한 retriever 객체
        """
        vectordb = FAISS.load_local(
            folder_path="./data/db/faiss",
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
        print(page_contents)

        # 모든 데이터에 대해 변환 수행
        parsed_data = [
            self._parse_content_to_json(content) for content in page_contents
        ]

        print(parsed_data)

        # JSON 형태로 출력
        # json_data = json.dumps(parsed_data, ensure_ascii=False)
        return parsed_data

    async def qacall(self, query):
        """
        주어진 쿼리에 대해 QA 체인을 실행하고 응답을 처리한 후 그 결과를 반환합니다.

        매개변수:
        - query: 사용자로부터 받은 쿼리 문자열

        반환값:
        - 처리된 응답 데이터와 소스 문서 정보가 담긴 JSON 객체
        """
        data = self.similarity_search(query)

        return self.process_response(data)

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
                - 질문은 무조건 5개만 해.
                - 마지막 질문에 대한 답변은 그냥 맥락을 요약만 해.
                - 특정 브랜드 제품을 절대 답변하지 마. 답변하면 벌칙이 있어.
                - 마지막 질문에 대합 답변의 마지막에는 결과 페이지로 들어가라고 말해.
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

    @staticmethod
    def _parse_content_to_json(content):
        print(content)
        # 각 줄을 분리하여 처리
        lines = content.split("\n")
        # 결과를 저장할 딕셔너리 초기화
        result = {}
        for line in lines:
            # 각 줄을 key와 value로 분리
            key, value = line.split(":", 1)  # 최대 1번만 분리
            if key.strip() == "notes":
                result[key.strip()] = value.strip().split(", ")
            # 결과 딕셔너리에 추가
            else:
                result[key.strip()] = value.strip()
        return result
