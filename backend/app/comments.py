
from fastapi import APIRouter
from .database import db_instance
from .schemas import comment

[con_obj , cur_obj] = db_instance()

router = APIRouter()

@router.post("/")
def post_comment(com_obj : comment):
    cur_obj.execute("insert into comments values( '%s' , '%s' , '%s' , '%s' )"
                    %(com_obj.name,com_obj.email,com_obj.website,com_obj.comment))
    con_obj.commit()
    return {"msg" : "Data Inserted Successfully"}