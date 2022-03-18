import time
import pandas as pd
# import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from backend.save_data import save_data_frame
from storage.connection import db_connection
from storage.migrate import access_database

# export PYTHONPATH="${PYTHONPATH}:/home/breno/trybe/desafio_tecnico/Agilize/\
# backend-challenge"

connection = db_connection()
cursor = connection.cursor()

URL_BASE = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor\
    =orgaoSuperior&direcao=asc"
DB_NAME = "agilize"


def scraper(url):
    options = Options()
    options.add_argument("--headless")

    navegador = webdriver.Chrome(options=options)
    navegador.get(url)
    time.sleep(1)

    page_content = navegador.page_source

    data_frame = pd.read_html(page_content)[0]

    return data_frame


if __name__ == "__main__":
    # print(sys.path)
    access_database(connection)
    cursor.execute(f"USE {DB_NAME}")
    data_frame = scraper(URL_BASE)
    save_data_frame(data_frame, connection)
    connection.close()
    print('Scrape complete!!!')
