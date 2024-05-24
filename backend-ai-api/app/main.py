from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI, Request
import json
from pathlib import Path
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
import os


username = os.getenv("DB_USERNAME")
password = os.getenv("DB_PASSWORD")
host = os.getenv("DB_HOST")
database_name = os.getenv("DB_NAME")
port = 27017  
connection_string = f"mongodb://{username}:{password}@{host}:{port}/{database_name}?authSource=admin"

client = AsyncIOMotorClient(connection_string)
db = client[database_name]
historys_collection = db.get_collection("historys")

class HistorysModel(BaseModel):
    def __init__(self, user_id, question):
        self.user_id = user_id
        self.question = question
    user_id: str
    question: list

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"} 

class QuestionRequest(BaseModel):
    question: str


@app.post("/api/questions")
async def ask_question(request: Request):
    user_uuid = request.headers.get("Authorization")
    body = await request.body()
    data = json.loads(body)
    question = data.get("question")

    historys_collection.insert_one(
        {"user_id": user_uuid,
          "question": question
        }
    )
    
    # TODO : Manager에서 데이터 받아오는 로직 구현
    result = "테스트 result"

    return {
        "message": "사용자 질문 저장 성공",
        "data": {
            "result": result
          }
    }


@app.get("/api/results")
async def get_result(request: Request):
    user_uuid = request.headers.get("Authorization")
    
    # TODO : Manager에서 데이터 받아오는 로직 구현
    name = "testname"
    brand = "testbrand"
    description = "testdescription"
    notes =  [
            "testnote",
            "testnote",
            "testnote",
            "testnote"
        ],
    image_url = "test_image_url"


    return {
        "message": "추천 결과 조회 성공",
        "data": {
            "name": name,
            "brand": brand, 
            "description": description,
            "notes": notes,
            "imageUrl": image_url 
        }
    }