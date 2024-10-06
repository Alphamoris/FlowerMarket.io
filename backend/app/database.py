from psycopg2.extras import RealDictCursor
import psycopg2

db_params : dict = {
    "database" : "simple" ,
    "user" : "postgres" ,
    "host" : "localhost" ,
    "password" : "8072052338." ,
    "port" : "5432" ,
    "cursor_factory" : RealDictCursor
} 



def db_create_instance():
    con_obj = psycopg2.connect(**db_params)
    if con_obj:
        print("Connection to the database is successfull")
    cur_obj = con_obj.cursor()
    def db_return_instance():
        return [con_obj , cur_obj]
    return db_return_instance

db_instance = db_create_instance()
    

# con_obj = psycopg2.connect(**db_params)
# if con_obj:
#     print("Connection to the database is successfull")
# cur_obj = con_obj.cursor()