from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def f_func():
    return {"msg" : "This is the good time to start the development go ahead and rock Mr. Alpha Moris !!!!!"}