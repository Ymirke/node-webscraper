require('dotenv').config();
const inquirer = require('inquirer');

const getChromeInstance = async () => {
  let chromeInstance = process.env.CHROME_INSTANCE;

  if (!chromeInstance) {
    const inputChromeInstance = await inquirer.prompt([
      {
        name: 'answer',
        type: 'input',
        message: 'Paste chrome ws. (Or get it by pasting "npm run chromeMac" or "npm run chromeWindows" in another terminal.)',
      },
    ]);

    chromeInstance = inputChromeInstance.answer;
  }

  return chromeInstance;
};

module.exports = getChromeInstance;
