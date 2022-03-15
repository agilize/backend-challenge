from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome(executable_path=r'./chromedriver')

url = ('https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc')


def scrape(url):
    browser.get(url)

    table = []
    for item in browser.find_elements(By.TAG_NAME, 'tbody > tr'):
        new_item = dict()

        new_item['mes_ano'] = item.find_element(By.TAG_NAME, 'td:nth-child(2)').text
     
        new_item['orgao_superior'] = item.find_element(By.TAG_NAME, 'td:nth-child(3)').text
      
        new_item['orgao_entidade'] = item.find_element(By.TAG_NAME, 'td:nth-child(4)').text
       
        new_item['valor_empenhado'] = item.find_element(By.TAG_NAME, 'td:nth-child(5)').text
      
        new_item['Valor_liquidado'] = item.find_element(By.TAG_NAME, 'td:nth-child(6)').text
       
        new_item['Valor_pago'] = item.find_element(By.TAG_NAME, 'td:nth-child(7)').text
      
        new_item['valor_resto_a_pagar'] = item.find_element(By.TAG_NAME, 'td:nth-child(8)').text
      
        table.append(new_item)

    print(table)
    return table

scrape(url)

    