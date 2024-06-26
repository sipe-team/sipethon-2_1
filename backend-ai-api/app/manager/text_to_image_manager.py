import os

from openai import OpenAI

from .qa_manager import QAManager


class Text2ImageManager:

    def __init__(self):
        self.api_key = os.environ.get("OPENAI_API_KEY")
        self.client = OpenAI(api_key=self.api_key)

    def generate_image_url(self, data: list):
        qa_manager = QAManager()
        text = qa_manager.summary(data)

        print(text)
        text = f"""
            {text} 향수를 사용하는 사람을 그려
            
            - 현실과 가까운 실사 이미지
            - 향수를 사용하는 사람이 이미지에 큰 비중을 가짐
        """

        try:
            response = self.client.images.generate(
                model="dall-e-3",
                prompt=text,
                size="1024x1024",
                quality="standard",
                n=1,
            )
            return response.data[0].url
        except:
            return "https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihb60vL8q0Rpbky7mXzFHm1YROhDj3Q3kWw6SO52BHGiXhzFe7ySKI8zjYbpc-yL21zfPM3I5hfdSXZktLeU0XGr4qMuoaOyVUc=w2762-h2328"
