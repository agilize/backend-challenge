from core import user_table, engine
from crawler import scrape

url = ('https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc')

conn  = engine.connect()

conn.execute(user_table.insert(), scrape(url))
