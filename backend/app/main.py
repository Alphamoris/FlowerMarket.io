from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import comments, price_details , signup , signin , image , imgsend

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)



app.include_router(price_details.router , prefix= "/items")
app.include_router(comments.router , prefix= "/comment")
app.include_router(signup.router , prefix= "/signup")
app.include_router(signin.router , prefix= "/signin")
app.include_router(image.router , prefix= "/image")
app.include_router(imgsend.router , prefix= "/imgsend")

