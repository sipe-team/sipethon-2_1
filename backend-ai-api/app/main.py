from typing import List, Union

from fastapi import FastAPI
from pydantic import BaseModel

from .service.qa_service import QAService
from .data.setup_vector_database import setup_vector_database

setup_vector_database("db/faiss")

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

qa_service = QAService()

class PerfumeRequestDto(BaseModel):
    query: str

class ChatRequestDto(BaseModel):
    role: str
    content: str

@app.post("/chat")
async def chat_endpoint(data: List[ChatRequestDto]):
    result = qa_service.conversation(data)
    return result

@app.post("/chat/search")
async def analyze_perfume_endpoint(data: PerfumeRequestDto):
    result = await qa_service.qacall(data.query)
    return result
