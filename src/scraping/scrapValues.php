<?php

// O uso do HeadLess foi uma dica do Israel Brito, agradeco muito
use HeadlessChromium\BrowserFactory;

require_once '../../vendor/autoload.php';


function getScrapValues(){
    $url = 'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc';
    $browserFactory = new BrowserFactory('google-chrome');
// starts headless chrome
    $browser = $browserFactory->createBrowser();

    
    try {
        // creates a new page and navigate to an URL
        $page = $browser->createPage();
        $page->navigate($url)->waitForNavigation();
        sleep(1);
        $value = $page
              ->evaluate("const parents = document.querySelectorAll('.coluna-livre');
                          const values = [];
                          for (let i = 0; i < parents.length; i++) {
                              values.push(parents[i].innerText);
                          };
                          values;")
                       ->getReturnValue();
        return $value;
    } finally {
        // bye
        $browser->close();
    }
}