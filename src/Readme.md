# RESTful com Node.js, PostgresSQL

### Update: 17.03.2022

> Este projeto foi desenvolvido para fins de processo seletivo

### Pré-requisitos

- **Node.js** versão 8 ou superior;


### Instalação

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto com `npm install`;
3. Rode o servidor de desenvolvimento com `npm run dev`.
4. Utilizando o arquivo `/.env.example` como parâmetro, edite suas configurações de conexao com banco de dados PostgresSQL
5. Dumping do banco de dados disponivél no arquivo `/.database.sql`

### Sugestão

Utilize o Postman (https://www.postman.com/) ou Insomnia(https://insomnia.rest/download) para testar suas chamadas.

### Estrutura de Pasta

    ├── projeto-processo-seletivo-back
    |   ├── node_modules (não será importado, rodar npm install)
    |   ├── src
    |   ├── Readme.md
    |       ├── index.js
    |       ├── rotas.js
    |       ├── conexao.js
    |       ├── controladores
    |           ├── dados.js
    |   ├── database.sql
    |   ├── .env(não importado, personalizavél)
    |   ├── package-lock.json
    |   ├── package.json
    |   ├── README.md

### Métodos API : Usar o Postman ou Insomnia para facilitar os testes

### URL: 
    http://localhost:8000/dados
#### Method: GET  


### License

[MIT](https://github.com/Debora1Allen)©[2022 debora1allen](https://github.com/Debora1Allen)

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.