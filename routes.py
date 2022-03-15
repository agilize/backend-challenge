from crypt import methods
from flask import Flask
from core_select import select_all

app = Flask("app")

@app.route("/api/dados", methods=["GET"])

def dados():
    try:
        return select_all()
    except Exception as e:
        return str(e)

app.run()