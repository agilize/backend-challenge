const { InfosGov } = require('../database/models');
const errorHandling = require('../utils/errorHandling');

const puppeteer = require('puppeteer');
const { badRequest, notFound } = require('../utils/dictionary');

const scrapping = async () => {
  const browser = await puppeteer.launch({ headless: false });
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

  if (!resultOfScrapping || resultOfScrapping.length === 0) {
    throw errorHandling(badRequest, 'Something went wrong');
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
  
  arraysOfInfos.map(array => {
    const [mesAno, programaOrcamentario, acaoOrcamentaria, valorEmpenhado, valorLiquidado, valorRestosAPagarPagos] = array;
    await InfosGov.create({
      mesAno, programaOrcamentario, acaoOrcamentaria, valorEmpenhado, valorLiquidado, valorRestosAPagarPagos
    });
  }); 

};

const getInfosGov = async () => {
  await createInfosGov();
  const infosFromGov = await InfosGov.findAll();

  if (!infosFromGov) throw errorHandling(notFound, 'Infos not found');

  return infosFromGov;
};

module.exports = {
  getInfosGov,
};
