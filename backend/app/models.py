from sqlalchemy import Column , ForeignKey , Integer , String ,Time , Date , func , Float
from sqlalchemy.orm import relationship
from .database import Base


class price(Base):

    __tablename__ = "price"

    id = Column(Integer , primary_key=True)
    shop_name = Column(String , nullable=True , default="Nearby Store")
    date = Column(Date , server_default=func.current_date())
    time = Column(Time , server_default=func.current_time())
    fname = Column(String , nullable=False)
    description = Column(String , nullable=True , default="Fresh Flowers")
    price =Column(Integer , default= 0)
    place = Column(String , nullable=False )

class types(Base):

    __tablename__ = "types"

    id = Column(Integer , primary_key=True)
    fname = Column(String , nullable=False)

class comments(Base):

    __tablename__ = "comments"

    id = Column(Integer , primary_key=True , autoincrement=True)
    name = Column(String , nullable=False)
    email = Column(String , nullable=False)
    rating = Column(Float , nullable=True)
    comment = Column(String , nullable=False)

class user(Base):

    __tablename__ = "user"

    id = Column(Integer , primary_key=True , autoincrement=True)
    fname = Column(String , unique=True , nullable=False)
    emailid = Column(String , unique=True , nullable=False , index=True)
    password = Column(String , unique=True , nullable=False , index=True)
    lname = Column(String , nullable=True)
    age = Column(Integer , nullable=False)
    contactno = Column(Integer , nullable=False)
    zipcode = Column(Integer , nullable=False)
    city = Column(String , nullable=True)
    state = Column(String , nullable=True)
    dob = Column(Date , nullable=False)