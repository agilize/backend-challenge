# Web Scraping - Portal da Transparência

Este projeto foi desenvolvido como solução para o desafio de Back End da Agilize.

O projeto tem duas partes principais, que são o scraper feito com Python e a API feita com Laravel/Lumen 9. Para o banco de dados utilizado foi o SQLite.

Para testar o projeto, basta seguir as instruções do *Road Map*, ademais é possível ver a gravação da aplicação rodando clicando [AQUI](https://www.youtube.com/watch?v=S8d_hGRXP9o). 

- [Pré-requisitos](#pré-requisitos)
- [Road Map](#road map)
- [Estrutura do arquivo .db](#estrutura do arquivo government_expenses.db)
- [Rota](#rota)



## Pré-requisitos 

Firefox ( Este navegador é necessário, pois o webdriver utiliza ele para fazer o web scraping ).

```
https://www.mozilla.org/pt-BR/firefox/new/
```

Python v.3.10.2

```
https://www.python.org/downloads/
```

PHP >= v.8.0

```
https://www.php.net/downloads.php
```

Composer v.2.2.7

```
https://getcomposer.org/download/
```



## Road Map

1. Realize o clone do repositório.

2. No terminal digite: 

   ```
   git checkout isaac-jordao
   pip install -r requirements.txt
   ```

3. Após a instalação dos pacotes, ainda no terminal, execute o seguinte comando:

   ```
   python scraper.py
   ```

   

   Durante a execução do scraper, irão aparecer algumas mensagens no terminal informando o que está acontecendo, e ao fim da execução, será criado o arquivo **government_expenses.db** com os registros de todas as páginas da tabela do Portal da Transparência, caso já exista o arquivo, os dados serão substituídos pelos novos.

   **Observação**: algumas vezes a tabela presente no site não carrega muito bem, por isso, caso demore muito para aparecer a segunda mensagem no terminal, reinicie o comando do passo 3.

   

   **A partir de agora, todos os comandos do terminal serão executados dentro da pasta *web-scraping-api*** 

   

4. Utilize o comando para entrar na pasta da API.
   
   ```
   cd ./web-scraping-api
   ```
   
5. Utilize o comando abaixo para instalar todas as dependências necessárias para executar a API:
   
   ```
   composer install
   ```
   
6. Para iniciar o servidor:

   ```
   php -S localhost:8000 -t public
   ```

7. No Postman, Insomnia ou até mesmo no navegador, cole o seguinte endereço para acessar o resultado do web scraping:

   ```
   http://localhost:8000/api/dados
   ```



## Estrutura do arquivo `government_expenses.db`

{
    "index": 0,
    "mes_ano": "01/2022",
    "programa_orcamentario": "63000 - Advocacia-Geral da União",
    "acao_orcamentaria": "63000 - Advocacia-Geral da União - Unidades com vínculo direto",
    "valor_empenhado": "3.159.878.346,60",
    "valor_liquidado": "277.492.902,95",
    "valor_pago": "99.768.376,98",
    "valor_restos_a_pagar_pagos": "265.370.842,94"
  }



## Rota

[GET] /api/dados - Retorno de todos os dados da tabela.