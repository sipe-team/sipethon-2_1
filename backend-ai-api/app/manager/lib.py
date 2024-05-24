from .setup_vector_database import SetupVectorDatabase


def set_config():
    # initialize vector database
    vector_data_base = SetupVectorDatabase("db/faiss")
    vector_data_base.setup_vector_database()
