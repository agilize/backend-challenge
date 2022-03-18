import os
import dotenv
import mysql.connector

dotenv.load_dotenv()
DB_NAME = os.getenv("DB_NAME")
TABLE_NAME = os.getenv("TABLE_NAME")

create_expense_table_query = F"""
        CREATE TABLE {TABLE_NAME}(
        id INT AUTO_INCREMENT PRIMARY KEY,
        mes_ano VARCHAR(100),
        valor_empenhado VARCHAR(100),
        valor_liquidado VARCHAR(100),
        valor_pago VARCHAR(100),
        valor_restos_a_pagar_pagos VARCHAR(100)
    )
"""


def create_database(connection):
    try:
        cursor = connection.cursor()
        cursor.execute(
            f"CREATE DATABASE {DB_NAME} DEFAULT CHARACTER SET 'utf8'"
        )
        cursor.close()
    except mysql.connector.Error as err:
        print(f"Failed creating database: {err}")
        exit(1)


def create_table(connection):
    try:
        cursor = connection.cursor()
        print(F"Creating table {TABLE_NAME}")
        cursor.execute(create_expense_table_query)
        cursor.close()
    except mysql.connector.Error as err:
        if err.errno == 1050:
            print("Table already exists.")
        else:
            print(err.msg)
    else:
        print(F"Table {TABLE_NAME} created successfully.")


def access_database(connection):
    try:
        cursor = connection.cursor()
        cursor.execute(f"USE {DB_NAME}")
        cursor.close()
    except mysql.connector.Error as err:
        print(f"Database {DB_NAME} does not exists.")
        if err.errno == 1049:
            create_database(connection)
            print(f"Database {DB_NAME} created successfully.")
            connection.database = DB_NAME
            create_table(connection)
        else:
            print(err)
            exit(1)


if __name__ == "__main__":
    access_database()
