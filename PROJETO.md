
# Web Scraping

Projeto feito para o processo seletivo da empresa Agilize "https://agilize.com.br/".  
projeto feito em PHP ,Mysql, e um pouco de javaScript.
  
  

  
## REQUISITOS PARA RODAR O PROJETO LOCALMENTE
  
**Chrome** (necessário para o a biblioteca chrome-php)
```
https://www.google.com/intl/pt-BR/chrome/
```
  
**PHP v8.0.0^**
```
https://www.php.net/downloads
```
  
**Composer v2.0.0^**
```
https://getcomposer.org/download/
```
  
**Mysql**
```
https://www.mysql.com/downloads/
```
  
**XAMPP** (windows)
```
https://www.apachefriends.org/pt_br/index.html
```
  
**Apache** (linux)
```
https://www.layerstack.com/resources/tutorials/Installing-Apache-server-on-Linux-Cloud-Servers
```
  
Dependendo da distribuição linux e da intalação do php sera necessario a instalação de alguns pacotes do PHP
```
sudo apt-get install php-xml
sudo apt-get install php-mbstring
sudo apt-get install -y php-mysqli

```




## Como iniciar o projeto

Primeiramente va até onde esta armazenado o seu projeto, e modifique o arquivo **.env.example**   
para os seus respectivos dados do Mysql. Assim que terminar renomeie o arquivo para **.env**.  
Este arquivo é onde fica os dados sensiveis, que não devem ser compartilhados.  


### Windows
Abra o aplicativo XAMPP, e inicie o serviço apache, grave a porta pois ela que voce vai usar para
acessar o servidor local

### Linux
Acesse o repositorio do projeto, e insira os seguintes comandos no terminal:
```
        composer update
        php -S localhost:8000
```
a porta do php pode ser modificada, mas a padrão linux é a 8000.


# API
Acesse as Urls abaixo para executar a criação, inserção e retorno dos dados.
Elas podem ser acessadas pelo navegador, ou aplicativos de simulação como o PostMan.
Como exemplo irei usar a porta 8000, porem use a porta em que voce inicializou o localhost,
ou a porta dada pelo XAMPP.

## Criando e populando o banco de dados

### Criar o banco de dados
```
http://localhost:8000/DB/create
```

### Inserir os dados no Mysql
```
http://localhost:8000/DB/populate
```



##  Retorno da api

```
http://localhost:8000/api/dados
```




