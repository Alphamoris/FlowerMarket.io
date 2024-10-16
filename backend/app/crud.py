from fastapi import HTTPException , status
from sqlalchemy.orm import Session
from pydantic import EmailStr
from .models import types , price , comments , user
from .schemas import details , comment , User , UserCrd
from .Oauth2 import hashpassword , verify


# def add_flowers(db:Session , flo : price ):
#     new_flower = price(**(dict(flo)))
#     db.add(new_flower)
#     db.commit()
#     db.refresh(new_flower)
#     return {"msg" : "Records insertion successful"}




def give_all_price( db:Session ):
    return (db.query(price).all())




def give_all_types(db:Session):
    return (db.query(types).all())



def get_comments(db:Session , cdetail : comment ):
    data = comments(**(dict(cdetail)))
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
    if data is None :
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail=f"Invalid Credentials")
    if (verify(password,data.password)):
        return True
    else:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail=f"Invalid Credentials")