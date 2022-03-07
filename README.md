
# Web Scraping

O web scraping (raspagem de rede, em tradução livre), também conhecido como extração de dados da web,
é o nome dado ao processo de coleta de dados estruturados da web de maneira automatizada. Em geral,
esse método é usado por pessoas, empresas que desejam usar a vasta quantidade de dados da web disponíveis
publicamente para tomar decisões mais inteligentes.

## O desafio

- Fazer um *web scraping* da tabela de dados do [Portal da Transparência do Governo Federal](https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc)
- armazenar num banco de dados relacional
- fornecer um endpoint (/api/dados) que retorne um json com os dados coletados:
    - Estrutura do retorno da API:
        - mes_ano
        - programa_orcamentario
        - acao_orcamentaria
        - valor_empenhado
        - valor_liquidado
        - valor_pago
        - valor_restos_a_pagar_pagos

**Bônus**: Fazer o scraping de todas as páginas da tabela do site

A tabela de dados para o scraping fica em (ver print abaixo):

[https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc](https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc)

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f510b40-b623-4a19-abfd-bde02ade14bb%2FUntitled.png?table=block&id=fae53644-6d4c-47b0-8697-45ffc3f8be8c&spaceId=53665a91-e421-49de-b437-e4b5018c879a&width=1880&userId=9595c958-022c-4858-8cd0-6e6019d87b83&cache=v2)

## Sugestões

- Preferencialmente utilize PHP, mas esteja livre para usar qualquer linguagem
- Sugerimos usar docker para facilitar o desenvolvimento e a avaliação do resultado
- Faça um README explicando o que foi feito, como forma de documentação.

## Como você deve nos enviar sua solução?

Faça um clone deste projeto, crie uma branch com seu nome-sobrenome e ao finalizar abra um pull-request para um avaliador da agilize
e envie um e-mail para [dev@agilize.com.br](mailto:dev@agilize.com.br) com o assunto: **[DESAFIO BACKEND AGZ] + Finalizado + (nome-da-branch)**