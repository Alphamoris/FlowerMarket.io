from fastapi import Depends , FastAPI , HTTPException
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware 

from .crud import give_all_price
from .schemas import details , price
from .database import SessionLocal , engine


app = FastAPI()

origins = [
    "http://localhost:3000",  # Your Next.js app
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close() 

@app.get("/get/price" , response_model=List[price])
def getting( db:Session = Depends(get_db)):
    data = give_all_price( db = db )
    return data

@app.post("/post" )
def setting(detail : price , db : Session = Depends(get_db)):
    data = add_flowers( flo = detail , db=db)
    return data