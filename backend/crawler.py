import time
import requests

URL_BASE = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor\
    =orgaoSuperior&direcao=asc"


def fetch(url, timeout=3):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
        time.sleep(1)
    except (requests.HTTPError, requests.ReadTimeout):
        return None
    finally:
        return response.text


if __name__ == "__main__":
    html_content = fetch(URL_BASE)
    print(html_content)
