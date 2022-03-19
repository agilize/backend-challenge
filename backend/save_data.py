import os
import dotenv

dotenv.load_dotenv()
TABLE_NAME = os.getenv("TABLE_NAME")


def save_data_frame(data_frame, connection):
    cursor = connection.cursor()
    for index, row in data_frame.iterrows():
        sql_query = f"""
            INSERT INTO {TABLE_NAME}
            (
                mes_ano,
                programa_orcamentario,
                acao_orcamentaria,
                valor_empenhado,
                valor_liquidado,
                valor_pago,
                valor_restos_a_pagar_pagos
            )
            VALUES (
                '{row[1]}',
                '{row[7]}',
                '{row[8]}',
                '{row[15]}',
                '{row[16]}',
                '{row[17]}',
                '{row[18]}'
            )
        """
        cursor.execute(sql_query)
        connection.commit()
    cursor.close()
