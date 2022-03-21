import os
import mysql.connector
import dotenv

dotenv.load_dotenv()


def db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user=os.getenv("DB_USER"),
            password=os.getenv("PASSWORD"),
        )
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info, '\n')
            return connection
    except mysql.connector.Error as e:
        print("Error while connecting to MySQL", e)
