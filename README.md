# survival-bot

Install node and npm.

Run npm install before use.

Login to https://programare.vaccinare-covid.gov.ro

Open chrome dev tools

Go to the available slots page

In the networks tab, right click on the following request: "https://programare.vaccinare-covid.gov.ro/scheduling/api/centres?page=0&size=10&sort=,"

And select Copy as Node.js fetch

Replace `fetch('replace with fetch query')` inside bot.js with clipboard contents.

Run with `node bot.js`

Hope you don't die while waiting!!
