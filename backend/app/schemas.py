from pydantic import BaseModel, EmailStr
from datetime import date,time
from pydantic_settings import BaseSettings, SettingsConfigDict


class details(BaseModel):
    id : int
    fname : str

    class Cofig:
        orm_mode = True


class price(BaseModel):
    id: int
    shop_name: str
    date: date 
    time: time
    flowname: str
    main_description: str
    rating: int
    no_of_reviews: int
    seller_type: str
    availability: int
    price: int
    place: str
    long_description: str = None  # Optional field

    class Config:
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


class TokenData(BaseModel):
    emailid : EmailStr





class Settings(BaseSettings):
    database_hostname: str
    database_port: str
    database_password: str
    database_name: str
    database_username: str
    secret_key: str
    algorithm: str
    expiration_time: str

    model_config = SettingsConfigDict(env_file=".env")

