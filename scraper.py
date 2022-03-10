from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
from selenium.webdriver.edge.options import Options
import pandas as pd
from selenium.webdriver.support.ui import Select
from sqlalchemy import create_engine


options = Options()
options.add_argument('--headless')
browser = webdriver.Edge(options=options)

print('--------Carregando a página')
browser.get(
    'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc')
sleep(5)

browser.execute_script(
    """document.getElementsByName('lista_length')[0].innerHTML='<OPTION value="1">1 resultado</OPTION><OPTION value="999999999">Todos os resultados</OPTION>';""")
print('--------Executando o script para alterar a option')
select = Select(browser.find_element(By.NAME, 'lista_length'))
select.select_by_visible_text('Todos os resultados')
sleep(15)

page_content = browser.page_source
site = BeautifulSoup(page_content, 'html.parser')

data_info = []

data_table = site.find('tbody')

rows = data_table.findAll('tr')

for row in rows:
    row_info = row.findAll(
        ['span'], attrs={'data-html': 'true'})

    row_info = [info.text for info in row_info]
    row_info.pop(0)
    month_year = row_info[0]
    superior_agency = row_info[1]
    linked_entity = row_info[2]
    value_mortgage = row_info[3]
    value_settled = row_info[4]

    data_info.append([month_year, superior_agency, linked_entity,
                     value_mortgage, value_settled])

engine = create_engine('sqlite:///GovernmentExpenses.db', echo=False)

query_data = pd.DataFrame(data_info, columns=[
    'Mes/Ano', 'Orgão Superior', 'Entitade Vinculada', 'Valor Empenhado', 'Valor Liquidado'])
query_data.to_sql('expenses', con=engine, if_exists='replace')
