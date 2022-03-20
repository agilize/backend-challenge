const { InfosGov } = require('../models');
const errorHandling = require('../utils/errorHandling');

const puppeteer = require('puppeteer');
const { badRequest } = require('../utils/dictionary');

const scrapping = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc'
  );

  // link que me ajudou na lógica de pegar infos da tabela e juntar em um array
  // https://stackoverflow.com/questions/49236981/want-to-scrape-table-using-puppeteer-how-can-i-get-all-rows-iterate-through-ro
  const infosFromTable = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('#lista tr td'));
    return tds.map((td) => td.innerText);
  });

  await browser.close();
  return infosFromTable;
};

const breakArray = async () => {
  const resultOfScrapping = await scrapping();

  if (resultOfScrapping === undefined || resultOfScrapping.length === 0) {
    throw errorHandling(badRequest, 'Scrapping failed. Please try again.');
  }

  // link que me ajudou na lógica de cortar o array em arrays menores
  // https://stackoverflow.com/questions/8495687/split-array-into-chunks
  const arraysOfInfos = resultOfScrapping
    .filter((value) => value !== 'Detalhar')
    .reduce((resultArray, item, index) => {
      const breakOfArray = Math.floor(index / 7);

      if (!resultArray[breakOfArray]) {
        resultArray[breakOfArray] = []
      }

      resultArray[breakOfArray].push(item);

      return resultArray;
    }, []);

  return arraysOfInfos;
}

const createInfosGov = async () => {
  const arraysOfInfos = await breakArray().catch(() => { throw errorHandling(badRequest, 'Scrapping failed. Please try again.') } );

  arraysOfInfos.map(async (array) => {
    const [mesAno, programaOrcamentario, acaoOrcamentaria, valorEmpenhado, valorLiquidado, valorPago, valorRestosAPagarPagos] = array;
    await InfosGov.create({
      mesAno, programaOrcamentario, acaoOrcamentaria, valorEmpenhado, valorLiquidado, valorPago, valorRestosAPagarPagos
    });
  }); 

};

const getInfosGov = async () => {
  const infosFromGov = await InfosGov.findAll();

  if (infosFromGov.length === 0) {
    await createInfosGov();
    return 'Database filled. Request again to see the infos.';
  }

  return infosFromGov;
};

module.exports = {
  createInfosGov,
  getInfosGov,
};
