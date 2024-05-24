import os
from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

from dotenv import load_dotenv

load_dotenv()

CURRENT_DIR = os.path.dirname(__file__)
DATA_DIR = os.path.join(CURRENT_DIR, "../data/")

CSV_FILE_PATH = os.path.join(DATA_DIR, "final_perfume_data.csv")

class SetupVectorDatabase:
    def __init__(self, db_directory: str):
        self.db_directory = db_directory
        self.database_file_path = os.path.join(DATA_DIR, self.db_directory)

    def setup_vector_database(self):
        if (
            os.path.exists(self.database_file_path)
            and len(os.listdir(self.database_file_path)) > 0
        ):
            return None

        loader = CSVLoader(file_path=CSV_FILE_PATH)

        data = loader.load()

        embeddings_model = OpenAIEmbeddings()
        #   text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        # texts = text_splitter.split_documents(documents)  # 문서를 텍스트 청크로 분할
        vectordb = FAISS.from_documents(
            documents=data,
            embedding=embeddings_model,
        )
        vectordb.save_local(os.path.join(DATA_DIR, "db/faiss"))
