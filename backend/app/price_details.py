from fastapi import APIRouter
from .database import db_instance

[con_obj , cur_obj] = db_instance()

router = APIRouter()

@router.get("/")
def create_post():
   cur_obj.execute("select * from price_details")
   data = cur_obj.fetchall()
   return data

