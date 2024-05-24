import os
from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

from dotenv import load_dotenv

load_dotenv()

def setup_vector_database(db_directory: str):
  path = os.path.join(os.getcwd(), db_directory)

  if os.path.exists(path) and len(os.listdir(path)) > 0:
      print('db exists')
      return None
  
  loader = CSVLoader(file_path='final_perfume_data.csv')

  data = loader.load()

  embeddings_model = OpenAIEmbeddings()
    #   text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    # texts = text_splitter.split_documents(documents)  # 문서를 텍스트 청크로 분할
  vectordb = FAISS.from_documents(
    documents = data,
    embedding = embeddings_model,
  )
  vectordb.save_local('db/faiss')