import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

URL_BASE = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor\
    =orgaoSuperior&direcao=asc"


def scraper(url):
    options = Options()
    options.add_argument('--headless')

    navegador = webdriver.Chrome(options=options)
    navegador.get(url)
    time.sleep(1)

    page_content = navegador.page_source
    full_loaded_html_content = BeautifulSoup(page_content, "html.parser")

    table = full_loaded_html_content.find('table', id='lista')

    headers = []
    for title in table.find_all('th'):
        headers.append(title.text)

    return headers


if __name__ == "__main__":
    table = scraper(URL_BASE)
    print(table)
