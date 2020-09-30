const puppeteer = require('puppeteer')

const connectBrowser = async (chromeInstance) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: chromeInstance,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 789 });

  return { browser, page };
};

module.exports = {
  connectBrowser,
}