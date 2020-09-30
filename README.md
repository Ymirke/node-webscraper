# Node-Puppeteer-Webscraper
# Template for Puppeteer webscraper
### How to run
```terminal
npm install
// install packages

npm run chromeMac 
// OR 
npm run chromeWindows
// to launch chrome and get WS. 

npm run start 
// You'll get prompted to paste the WS to connect the chrome instance.
// alternatively you can add CHROME_INSTANCE=WS... to .env
```

### About: 
I recently worked on a web scraping project for myself and tried many different setups. This is what I landed on eventually.

Puppeteer has a lot of very good functionality, and this is how to piece it together to webscrape in what I've found to be the easiest way. 

With this you'll be able to launch a chrome instance and connect it to puppeteer, that way you'll see what happens. 

Often bugs come from changes on pages or menus, if you're able to see the page while developing you'll catch it a lot quicker than figuring out what is causing problems.

Webscraping in node.js and puppeteer is do-able, you can launch multiple windows and use that to run multiple different pages at once. However I would rather try out some python libraries as having to create blocking code to delay node is not ideal.
