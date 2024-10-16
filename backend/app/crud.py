from fastapi import HTTPException , status
from sqlalchemy.orm import Session
from pydantic import EmailStr
from .models import types , price , comments , user
from .schemas import details , comment , User , UserCrd
from .Oauth2 import hashpassword , verify

# def get_flowers(db:Session , id : int ):
#     return (db.query(flower).filter(flower.id == id).first())


# def add_flowers(db:Session , flo : details ):
def add_flowers(db:Session , flo : price ):
    new_flower = price(id = flo.id , shop_name = flo.shop_name ,date=flo.date,
                       time=flo.time,fname=flo.fname,description= flo.description 
                       , price = flo.price , place = flo.place )
    db.add(new_flower)
    db.commit()
    db.refresh(new_flower)
    return {"msg" : "Records insertion successful"}


def give_all_price( db:Session ):
    return (db.query(price).all())


def give_all_types(db:Session):
    return (db.query(types).all())

def get_comments(db:Session , cdetail : comment ):
    data = comments(id=cdetail.id,name=cdetail.name,
                    email=cdetail.email,rating=cdetail.rating,comment=cdetail.comment)
    db.add(data)
    db.commit()
    db.refresh(data)
    return ({"msg" : "Comment Received Successfully!!!"})

def new_user( db : Session , new_user : User):
    new_user.password = hashpassword(new_user.password)
    print(new_user)
    data = user(**(dict(new_user)))
    db.add(data)
    db.commit()
    db.refresh(data)
    return ({"msg" : "New User Received Successfully!!!"})
    
def get_user( db : Session , username : str , password : str ):
    data = (db.query(user.emailid,user.password).filter(user.emailid == username).first())
    if (verify(password,data.password)):
        return True
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail=f"Invalid Credentials")