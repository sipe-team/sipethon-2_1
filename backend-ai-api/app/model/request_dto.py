from pydantic import BaseModel


class PerfumeRequestDto(BaseModel):
    query: str


class ChatRequestDto(BaseModel):
    role: str
    content: str
