from passlib.context import CryptContext
from datetime import timedelta , datetime , timezone
import jwt

from .schemas import Token , UserCrd


SECRET_KEY = "7d86917ba82149e01fa6dd04dfc17fda7b3d902b6f9d774d2237a0603f89cfaf"
ALGORITHM = "HS256"
EXPIRATION_TIME = 20

pwd_context = CryptContext(schemes=["bcrypt"] , deprecated="auto")


def create_token( data : dict , token_validity : timedelta | None = None):
    to_encode = data.copy()
    if token_validity:
        expire = datetime.now(timezone.utc) + token_validity
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=EXPIRATION_TIME)
    to_encode.update({"exp" : expire})
    encoded_jwt = jwt.encode(to_encode , SECRET_KEY , algorithm=ALGORITHM)
    return encoded_jwt




def hashpassword(password):
    return pwd_context.hash(password)


def verify(plain_password : str , hashed_password : str ):
    return (pwd_context.verify(plain_password,hashed_password))