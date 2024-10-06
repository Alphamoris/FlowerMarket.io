

from pydantic import BaseModel, EmailStr
from datetime import date

class comment(BaseModel):
    name : str
    email : EmailStr
    website : str | None = None
    comment : str

class signup(BaseModel):
    fname : str
    lname : str
    age : int
    contactno : int
    emailid : EmailStr
    city : str
    state : str
    zipcode : int
    dob : date
    password : str
    id : int


class signin(BaseModel):
    emailid : str
    password : str

class image_cls(BaseModel):
    name : str 
    image : str
    id : int | None = None
