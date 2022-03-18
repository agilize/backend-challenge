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
                valor_empenhado,
                valor_liquidado,
                valor_pago,
                valor_restos_a_pagar_pagos
            )
            VALUES (
                '{row[1]}',
                '{row[4]}',
                '{row[5]}',
                '{row[6]}',
                '{row[7]}'
            )
        """
        cursor.execute(sql_query)
        connection.commit()
    cursor.close()
