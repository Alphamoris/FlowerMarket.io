from fastapi import APIRouter
from fastapi.responses import Response
import base64
from .database import db_instance

[con_obj , cur_obj] = db_instance()


router = APIRouter()

@router.get("/{img_id}")
def get_images(img_id : int ):

    cur_obj.execute("select name,images from images where id = %s ",(img_id,))
    data = cur_obj.fetchone()
    content_type = "image/jpeg"  # Default to JPEG
    if "png" in data["name"]:
        content_type = "image/png"
    elif "gif" in data["name"]:
        content_type = "image/gif"
    encoded_data = base64.b64encode(data["images"])
    print(encoded_data)
    return Response(content = encoded_data , media_type = content_type )