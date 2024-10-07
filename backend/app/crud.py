from sqlalchemy.orm import Session
from .models import types , price
from .schemas import details

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
