from fastapi import Depends , FastAPI , HTTPException
from sqlalchemy.orm import Session
from typing import List , Annotated
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.security import OAuth2PasswordRequestForm

from .crud import give_all_price , get_details_by_id , give_price_id , get_user , give_all_types , get_comments , new_user 
from .schemas import details , price ,comment , User , UserCrd , Token
from .database import get_db
from .Oauth2 import create_token , get_current_user


app = FastAPI()

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


@app.get("/")
def initial():
    return {"msg" : "Welcome To The FlowerMarket.io Backend Server"}




@app.get("/get/price" , response_model=List[price])
def getting( id = Depends(get_current_user) , db:Session = Depends(get_db)):
    data = give_all_price( db = db )
    return data




@app.post("/post/comment")
def comments(comment : comment , db : Session = Depends(get_db)):
    return (get_comments(cdetail=comment,db=db))




@app.get("/get/types" , response_model= List[details])
def gettypes( db : Session = Depends(get_db) , id = Depends(get_current_user)):
    return (give_all_types(db = db))





@app.get("/price/id",response_model= List[int])
def give_id_path( db : Session = Depends(get_db) ):
    return(give_price_id( db = db ))


@app.post("/signup")
def signup( user : User , db : Session = Depends(get_db)):
    msg = new_user(db = db , new_user = user )
    return msg




@app.get("/details/by/id" , response_model= price)
def get_details( id : int , id1 = Depends(get_current_user) , db : Session = Depends(get_db)):
    response = get_details_by_id( db = db , id = id)
    return response





@app.post("/login" )
def getuser( credentials : Annotated[OAuth2PasswordRequestForm , Depends()], db : Session = Depends(get_db)) -> Token:
    print(credentials.username , credentials.password)
    data = get_user( db = db , username= credentials.username , password= credentials.password)
    if data:
        tok = create_token(data={"user" : credentials.username})
        return Token(access_token = tok , token_type = "bearer")
    return data

