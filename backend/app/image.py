from fastapi import APIRouter , HTTPException
from .schemas import image_cls
import psycopg2
import base64
from datetime import datetime
from .database import db_instance

[con_obj , cur_obj] = db_instance()


router = APIRouter()

@router.post("/")
def update_img(img_obj : image_cls):
    try:
        bimage = base64.b64decode(img_obj.image)
        #cur_obj.execute("insert into images values( '%s' , '%s' , %s )"%(img_obj.name,img_obj.image,img_obj.id))
        cur_obj.execute("insert into images values( '%s' , %s )"%(img_obj.name,psycopg2.Binary(bimage)))
        con_obj.commit()
        return {"msg" : "Yeah! , Records inserted successfully"}
    except psycopg2.Error as e:
            raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")