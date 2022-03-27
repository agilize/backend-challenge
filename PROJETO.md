Para realizar o web scraping da página escolhida foi utilizada a biblioteca da API Puppeteer, que cria um headless html e torna possível extrair os dados dinamicamente da url selecionada, há a simulação da página, e então é possível selecionar através das classes e tags os elementos que se quer extrair.

O segundo passo foi escrever os dados obtidos pelo scraping em um arquivo '.json', isso foi feito utilizando a biblioteca nativa do javascript 'fs', que utiliza funções assíncronas para ler e escrever arquivos selecionados.

Em seguida foi criada uma rota do verbo POST para, lendo os dados escritos no arquivo '.json' criado, fazer um foreach, iterando cada linha da tabela a partir de cada objeto criado no arquivo '.json'.

E para finalizar, foi criada uma rota do verbo GET, para retornar todos os elementos da tabela, que foi criada externamente no BeeKeeper, em conformidade com os comandos a seguir:

'create table portal_transparencia
(
  	mes_ano text, 
 	orgao_superior text, 
 	orgao_entidade text, 
 	valor_empenhado text, 
 	valor_liquidado text, 
 	valor_pago text,
 	valor_restos_a_pagar_pagos text);'

Tal rota retorna um json com todos os dados da tabela.

Eu gostaria de agradecer a oportunidade de participar desse processo seletivo, e de realizar esse desafio, aprimorando meus conhecimentos e desenvolvendo novas técnicas de programação, sendo uma experiência de aprendizado e crescimento profissional.