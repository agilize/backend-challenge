const { InfosGov } = require('../models');
const errorHandling = require('../utils/errorHandling');

const puppeteer = require('puppeteer');
const { badRequest, notFound } = require('../utils/dictionary');

const scrapping = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc'
  );

  const infosFromTable = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('#lista tr td'));
    return tds.map((td) => td.innerText);
  });

  await browser.close();
  return infosFromTable;
};

const createInfosGov = async () => {
  const resultOfScrapping = await scrapping();

  if (resultOfScrapping === undefined || resultOfScrapping.length === 0) {
    throw errorHandling(badRequest, 'Scrapping failed. Please try again.');
  }

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
  getInfosGov,
};
