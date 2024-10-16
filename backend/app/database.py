from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from .schemas import Settings

setting = Settings()

SQLALCHEMY_DATABASE_URL = f"postgresql://{setting.database_username}:{setting.database_password}@{setting.database_hostname}/{setting.database_name}"

engine = create_engine ( SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autoflush=False , autocommit=False , bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close() 