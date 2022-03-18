<?php

// O uso do HeadLess foi uma dica do Israel Brito, agradeco muito
use HeadlessChromium\BrowserFactory;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');

require_once './vendor/autoload.php';


function getScrapValues()
{
    global $dotenv;
    $dotenv->load();
    $chrome = $_ENV['CHROME_PATH'];
    $url = 'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc';
    $browserFactory = new BrowserFactory($chrome);
    $browser = $browserFactory->createBrowser();
    
    try {
        // cria uma nova pagina e navega até ela
        $page = $browser->createPage();
        $page->navigate($url)->waitForNavigation();
        sleep(1);

        
        //abaixo um codigo em js que pega as tabelas e desestrutura elas
        //até retornar um array apenas os textos contidos.
        $value = $page
              ->evaluate(
                  "textValues = []; 
                for (let i = 0; i < 46; i++){
                let even = document.querySelectorAll('.even');
                let odd = document.querySelectorAll('.odd');
                let firstValues = [];
                odd.forEach((i) => firstValues.push(i))
                even.forEach((i) => firstValues.push(i))
                let cellValues = [];
                firstValues.forEach((i) => cellValues.push(i.cells));
                for (let i = 0; i < cellValues.length; i++)
                {
                for (let u = 0; u < cellValues[i].length; u++)
                    {
                        textValues.push(cellValues[i][u].textContent)
                    }
                }      
                let but = document.querySelectorAll('.paginate_button')[1];
                but.click();} 
                textValues;"
              )
                       ->getReturnValue();
        return $value;
    } finally {
        // bye
        $browser->close();
    }
}