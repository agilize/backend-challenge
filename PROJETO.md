# Web Sacraping da tabela de "Execução da Despesa por Órgão" do Portal da Transparência do Governo Federal

Este projeto tem como objetivo realizar um *web scraping* da **tabela de dados** do [Portal da Transparência do Governo Federal](https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc), armazenar os dados coletados em um banco de dados relacional e fornecer um endpoint que retorne um json com a seguinte estrutura de dados:

    - Estrutura do retorno da API:
        - mes_ano
        - programa_orcamentario
        - acao_orcamentaria
        - valor_empenhado
        - valor_liquidado
        - valor_pago
        - valor_restos_a_pagar_pagos

## Linguagens e ferramentas utilizadas

- Python:   Linguagem de programação
- Selenium: Automação do navegador da web
- Pandas:   Kit de ferramentas de análise de dados Python
- MySQL:    Banco de dados relacional
- Flask:    Framework de aplicação web escrito Python

<div>
  <div>
      &nbsp;&nbsp;
    <a target="_blank" href="https://docs.python.org/" rel="nofollow">
      <img alt="Python" width="38px" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_vertical_logo_icon_168039.png" />
    </a>
      &nbsp;&nbsp;
    <a target="_blank" href="https://www.mysql.com/" rel="nofollow">
      <img alt="Mysql" width="38px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png" />
    </a>
  </div>
</div>


## Pré-requisitos

O servidor **MySQL** deve estar devidamente instalado e configurado, assim como o **usuário de acesso** e sua **senha** devem ser informados no arquivo .env (.env EXAMPLE) na raiz do projeto.


1. Clone o repositório

- `git clone https://github.com/Breno3B/backend-challenge`

2. Acesse a pasta do repositório clonado:

- `cd backend-challenge`

3. Crie e ative o ambiente virtual para o projeto:

- `python3 -m venv .venv && source .venv/bin/activate`

4. Instale as dependências:

- `python3 -m pip install -r requirements.txt`

5. Inclua o diretório root do projeto na variável de ambiente PYTHONPATH.<br>

- `export PYTHONPATH="${PYTHONPATH}:<Caminho até a pasta do projeto>/backend-challenge"`


## Executando a aplicação e a API

1. Dentro do diretório do projeto (<Caminho até a pasta do projeto>/backend-challenge), execute o arquivo **crawler.py**, responsável pela coleta das informações e salvamento na base de dados.

- `python backend/crawler.py`<br>

2. Dentro do diretório do projeto (<Caminho até a pasta do projeto>/backend-challenge), execute o arquivo **app.py**, responsável por iniciar o servidor web que provê o acesso ao endpoint de retorno dos dados.

- `python api/app.py`<br>

---
**NOTA**

Após execução do comando acima será exibido uma mensagem/link informando o endereço onde o serviço estará disponível.

ex: Running on http://127.0.0.1:5000/

---

3. Acesse o link ou digite o caminho informado.

- Exemplo: `http://127.0.0.1:5000/`<br>
  

## Banco de Dados MySQL

Como informado nos pré-requisitos, o servidor MySQL deve estar devidamente instalado e configurado e o usuário de acesso e sua senha devem ser informados no arquivo .env na raiz do projeto. 

Foi disponibilizado um arquivo ".env EXAMPLE", além de ter alterado as informações de usuário e senha, deve ser renomeado para apenas ".env".

## Suporte

Em caso de dúvidas, entre em contato no endereço brenorm@gmail.com, terei prazer em ajudar!
