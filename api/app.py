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
    sql_query = f"""
        SELECT
            mes_ano,
            programa_orcamentario,
            acao_orcamentaria,
            CAST(valor_empenhado AS CHAR(100)) AS valor_empenhado,
            CAST(valor_liquidado AS CHAR(100)) AS valor_liquidado,
            CAST(valor_pago AS CHAR(100)) AS valor_pago,
            CAST(valor_restos_a_pagar_pagos AS CHAR(100))
                AS valor_restos_a_pagar_pagos
        FROM {DB_NAME}.{TABLE_NAME};"""
    cursor.execute(sql_query)
    result = cursor.fetchall()
    return json.dumps(result, indent=4)


app.run()
