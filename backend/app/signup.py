from fastapi import APIRouter
from .schemas import signup
from .database import db_instance

[con_obj , cur_obj] = db_instance()

router = APIRouter()

@router.post("/")
def signup(signup_obj : signup ):
    cur_obj.execute("insert into user_details values ('%s' ,'%s' , %s ,%s ,'%s' ,'%s' ,'%s' , %s ,'%s' ,'%s' , %s )"
                    %(signup_obj.fname,signup_obj.lname,signup_obj.age,signup_obj.contactno,signup_obj.emailid,signup_obj.city,signup_obj.state,signup_obj.zipcode
                      ,signup_obj.dob,signup_obj.password,signup_obj.id))
    con_obj.commit()
    cur_obj.execute("select * from user_details")
    data = cur_obj.fetchall()
    return data
