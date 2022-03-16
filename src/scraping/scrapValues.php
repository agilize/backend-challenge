<?php
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

        return $page
              ->evaluate('document.getElementsByClassName("coluna-livre")')
                ->getReturnValue();
    } finally {
        // bye
        $browser->close();
    }
}

