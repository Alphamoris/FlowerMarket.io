from pydantic import BaseModel, EmailStr
from datetime import date,time

class details(BaseModel):
    id : int
    fname : str

    class Cofig:
        orm_mode = True


class price(BaseModel):
    id : int
    shop_name : str
    date : date
    time : time
    fname : str
    description : str
    price : int
    place : str

class comment(BaseModel):
    id : int | None = None
    name : str 
    email : EmailStr
    rating : float | None = None
    comment : str
