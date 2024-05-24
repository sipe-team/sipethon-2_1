import os

from openai import OpenAI


class Text2ImageManager:

    def __init__(self):
        self.api_key = os.environ.get("OPENAI_API_KEY")
        self.client = OpenAI(api_key=self.api_key)

    def generate_image_url(self, text: str):
        response = self.client.images.generate(
            model="dall-e-3",
            prompt=text,
            size="1024x1024",
            quality="standard",
            n=1,
        )
        return response.data[0].url
