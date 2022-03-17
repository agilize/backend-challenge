<?php

// O uso do HeadLess foi uma dica do Israel Brito, agradeco muito
use HeadlessChromium\BrowserFactory;

require_once '../../vendor/autoload.php';


function getScrapValues(){
    $url = 'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc';
    $browserFactory = new BrowserFactory('google-chrome');
    $browser = $browserFactory->createBrowser();

    
    try {
        // cria uma nova pagina e navega até ela
        $page = $browser->createPage();
        $page->navigate($url)->waitForNavigation();
        sleep(1);
                        //abaixo um codigo em js que pega as tabelas e desestrutura elas
                        //até retornar um array apenas os textos contidos.
        $value = $page
              ->evaluate("const even = document.querySelectorAll('.even');
                          const odd = document.querySelectorAll('.odd');
                          const firstValues = [];
                          odd.forEach((i) => firstValues.push(i))
                          even.forEach((i) => firstValues.push(i))
                          const cellValues = [];
                          firstValues.forEach((i) => cellValues.push(i.cells))
                          textValues = [];
                          for (let i = 0; i < cellValues.length; i++)
                          {
                            for (let u = 0; u < cellValues[i].length; u++)
                            {
                                textValues.push(cellValues[i][u].textContent)
                            }
                          }      
                          textValues;")
                       ->getReturnValue();
        return $value;
    } finally {
        // bye
        $browser->close();
    }
}