from fastapi import APIRouter
from .schemas import signin
from .database import db_instance


[con_obj , cur_obj] = db_instance()

router = APIRouter()


@router.post("/")
def sign_in(signin_obj : signin):
    cur_obj.execute("select emailid,password from user_details")
    data = cur_obj.fetchall()
    #for i in data:
     #   return i.emailid
    #     if i.emailid==signin_obj.emailid and i.password == signin_obj.password :
    #return {"msg" : "You're Authorized"}
    return data
