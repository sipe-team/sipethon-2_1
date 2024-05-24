from typing import List, Union
from fastapi import FastAPI
from .manager.lib import set_config
from .manager.qa_manager import QAManager
from .model.request_dto import PerfumeRequestDto, ChatRequestDto
from .manager.text_to_image_manager import Text2ImageManager

set_config()
app = FastAPI()
qa_manager = QAManager()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.post("/chat")
async def chat_endpoint(data: List[ChatRequestDto]):
    result = qa_manager.conversation(data)
    return result


@app.post("/chat/search")
async def analyze_perfume_endpoint(data: List[ChatRequestDto]):
    result = await qa_manager.qacall(data)
    return result


@app.post("/chat/generate-image")
async def generate_image_endpoint(data: List[ChatRequestDto]):
    manager = Text2ImageManager()
    result = manager.generate_image_url(data)
    return {"image_url": result}


@app.post("/chat/summary")
async def summary_endpoint(data: List[ChatRequestDto]):
    result = qa_manager.summary_and_expect(data)
    return result
