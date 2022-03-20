## Aplicação back end de raspagem de dados

Uma aplicação back end para raspagem de dados, coletando informações da tabela do Portal da Transparência do Governo Federal e inserindo em um banco
de dados relacional.

Foram usadas as tecnologias:
- Node JS
- MySQL
- Express
- Sequelize
- Puppeteer
- Thunder Client

## Funcionamento da aplicação

A aplicação funciona com o bot do Puppeteer para raspagem de dados, ou seja, para coleta de informações de algum site. Nesse caso, foi escolhida a página https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc para alvo da raspagem. O servidor é iniciado e o bot é ativado para fazer a raspagem dos dados da tabela alvo. Se as informações foram coletadas com sucesso, elas são adicionadas ao banco de dados MySQL por meio do Sequelize. Caso algo tenha dado errado, o cliente receberá tal aviso e será guiado para que o erro seja solucionado. Ao fazer a requisição para a rota /api/dados, caso o banco de dados esteja vazio por conta de algum erro na raspagem ao início da aplicação, essa requisição fará a inserção dos dados no banco de dados. Caso esteja tudo certo, a requisição entregará os dados ao usuário.

## Requisitos para rodar o projeto

- Node JS instalado
- MySQL instalado

## Como clonar o repositório e testar o projeto

Clone o projeto do Github :

```sh
$ git clone git@github.com:leonardomunsa/backend-challenge.gitt or git clone https://github.com/leonardomunsa/backend-challenge.git
$ cd backend-challenge
```

#### Para que o banco de dados funcione:

```
- abra o arquivo config.json da pasta config
- edite a variável de senha no objeto development para sua senha usada no usuário do MySQL*
```
A partir disso o projeto está configurado para conectar com o bando de dados a partir do sequelize
*nunca commite esse documento com sua senha, apenas salve para uso do banco de dados

#### Instale as dependências e inicie a aplicação para fazer as requisições:

```sh
$ npm install
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npm start
```

Se estiver tudo ok, a aplicação deve rodar no link:

```bash
http://localhost:8090
```

Teste para ver se está correto, adicione ingredientes ao bando de dados e entre no link http://localhost:8090/api/dados,
o resultado deve ser, em formado json, as informações da tabela do site do Portal de Transparência do Governo.
