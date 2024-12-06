import jwt
from passlib.context import CryptContext
from datetime import timedelta , datetime , timezone
from jwt import InvalidTokenError
from pydantic import EmailStr
from typing import Annotated 
from fastapi import Depends , HTTPException , status
from fastapi.security import OAuth2PasswordBearer

from .schemas import TokenData , Settings

setting = Settings()


SECRET_KEY = setting.secret_key
ALGORITHM = setting.algorithm
EXPIRATION_TIME = int(setting.expiration_time)

Oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
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





def verify_access_token(token : str , credentials_exception) -> TokenData:
    
    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms= [ALGORITHM])
        useremailid : EmailStr = payload.get("user")
        token_data = TokenData(emailid=useremailid)
        if useremailid is None : 
            raise credentials_exception
    
    except InvalidTokenError:
        raise credentials_exception
    
    return token_data





def get_current_user(token : Annotated[str , Depends(Oauth2_scheme)]):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED 
                           , detail="Could not validate your credentials",
                           headers={"WWW-Authenticate" : "Bearer"})
    return verify_access_token(token ,credentials_exception)




def hashpassword(password):
    return pwd_context.hash(password)




def verify(plain_password : str , hashed_password : str ):
    return (pwd_context.verify(plain_password,hashed_password))