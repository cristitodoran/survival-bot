# survival-bot

Just go to avaible slots page and filter.

Open chrome dev tools and paste the code from console_bot.js. Hit Enter and wait.

### Outdated ####

Install node and npm.

Run npm install before use.

Login to https://programare.vaccinare-covid.gov.ro

Open chrome dev tools

Go to the available slots page and filter for city and county

In the networks tab, right click on the following request: "https://programare.vaccinare-covid.gov.ro/scheduling/api/centres?page=0&size=10&sort=,"

And select Copy as Node.js fetch

Replace `fetch('replace with fetch query')` inside bot.js with clipboard contents.

Run with `node bot.js`

Meanwhile run the extension Super Simple Auto Refresh in Chrome on the available slots page. You do this so your session doesn't expire and you can quickly book your shot.

Enjoy. Hope you don't die while waiting!!
