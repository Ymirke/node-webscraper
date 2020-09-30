const getChromeInstance = require('./lib/getChromeInstance');
const { connectBrowser } = require('./lib/browser');
const { sleep, generateRandomRealisticTime } = require('./lib/sleep');

const scraper = async () => {
  await sleep('Starting scraper in', generateRandomRealisticTime());
  const chromeInstance = await getChromeInstance();
  const { browser, page } = await connectBrowser(chromeInstance);

  await page.goto('https://www.google.com/', {
    waitUntil: 'networkidle0' // Waits untill page is fully loaded. 
  });

  await page.waitForSelector('#fsl > a:nth-child(2)', {
    timeout: 3000 // Option: will throw error after X milliseconds if no selector is found 
  });

  const text = await page.evaluate(() => {
    return document.querySelector('#fsl > a:nth-child(2)').innerText;
  })

  console.log(text);
  return text;
}

scraper();
