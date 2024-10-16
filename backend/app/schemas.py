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

    class Cofig:
        orm_mode = True

class comment(BaseModel):
    id : int | None = None
    name : str 
    email : EmailStr
    rating : float | None = None
    comment : str

    class Cofig:
        orm_mode = True


class UserCrd(BaseModel):
    password : str
    emailid : EmailStr


class Token(BaseModel):
    access_token : str 
    token_type : str
    class Cofig:
        orm_mode = True

class User(UserCrd):
    id : int | None = None
    fname : str
    lname : str
    age : int
    contactno : int 
    zipcode : int 
    city : str
    state : str
    dob : date

    class Cofig:
        orm_mode = True



