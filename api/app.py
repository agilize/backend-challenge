import os
import dotenv
import json
from flask import Flask
from storage.connection import db_connection

dotenv.load_dotenv()
DB_NAME = os.getenv("DB_NAME")
TABLE_NAME = os.getenv("TABLE_NAME")

connection = db_connection()

app = Flask(__name__)


@app.route('/')
def expenses_per_organ():
    cursor = connection.cursor(dictionary=True)
    cursor.execute(f"USE {DB_NAME}")
    sql_query = f"SELECT * FROM {DB_NAME}.{TABLE_NAME};"
    cursor.execute(sql_query)
    result = cursor.fetchall()
    return json.dumps(result, indent=4)


app.run()
