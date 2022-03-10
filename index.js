const puppeteer = require('puppeteer');

async function teste() {
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

teste().then((result) => {
  const arraysOfInfos = result
    .filter((value) => value !== 'Detalhar')
    .reduce((resultArray, item, index) => {
      const breakOfArray = Math.floor(index / 7);

      if (!resultArray[breakOfArray]) {
        resultArray[breakOfArray] = []
      }

      resultArray[breakOfArray].push(item);

      return resultArray;
    }, [])
  console.log(arraysOfInfos);
});
