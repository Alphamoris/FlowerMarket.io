from fastapi import Depends , FastAPI , HTTPException
from sqlalchemy.orm import Session
from typing import List , Annotated
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.security import OAuth2PasswordBearer

from .crud import give_all_price , give_all_types , get_comments
from .schemas import details , price ,comment
from .database import SessionLocal , engine


app = FastAPI()

oauth2 = OAuth2PasswordBearer("token")

origins = [
    "http://localhost:3000",  
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


@app.get("/auth/")
async def auth( token : Annotated[str,Depends(oauth2)]):
    return ({"token" : token})

@app.get("/get/price" , response_model=List[price])
def getting( db:Session = Depends(get_db)):
    data = give_all_price( db = db )
    return data


@app.post("/post/comment")
def comments(comment : comment , db : Session = Depends(get_db)):
    return (get_comments(cdetail=comment,db=db))

@app.get("/get/types" , response_model= List[details])
def gettypes( db : Session = Depends(get_db)):
    return (give_all_types(db = db))

# @app.post("/post" )
# def setting(detail : price , db : Session = Depends(get_db)):
#     data = add_flowers( flo = detail , db=db)
#     return data