from fastapi import Depends , FastAPI , HTTPException
from sqlalchemy.orm import Session
from typing import List , Annotated
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.security import OAuth2PasswordBearer , OAuth2PasswordRequestForm

from .crud import give_all_price , get_user , give_all_types , get_comments , new_user
from .schemas import details , price ,comment , User , UserCrd , Token
from .database import SessionLocal , engine
from .Oauth2 import create_token


app = FastAPI()

oauth2 = OAuth2PasswordBearer(tokenUrl="token")

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



@app.post("/signup")
def signup( user : User , db : Session = Depends(get_db)):
    msg = new_user(db = db , new_user = user )
    return msg


@app.post("/get/user" )
def getuser( credentials : Annotated[OAuth2PasswordRequestForm , Depends()], db : Session = Depends(get_db)) -> Token:
    data = get_user( db = db , username= credentials.username , password= credentials.password)
    if data:
        tok = create_token(data={"user" : credentials.username})
        return Token(access_token = tok , token_type = "bearer")
    return data

# @app.post("/post" )
# def setting(detail : price , db : Session = Depends(get_db)):
#     data = add_flowers( flo = detail , db=db)
#     return data