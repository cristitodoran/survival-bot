const fetch = require('node-fetch');
const {parse} = require('node-html-parser');
const beep = require('beepbeep');

const saveMyLife = async () => {
  const res = await fetch('replace with fetch query');

  const body = await res.json();

  return body.content
    .some(n => n.availableSlots > 0);
}

const hopeInterval = setInterval(() => {
  saveMyLife().then(iWillSurvive => {
    console.log('checking', (new Date()).toLocaleString('ro-RO'), iWillSurvive);
    if(iWillSurvive) {
      beep(100, 100);
      clearInterval(hopeInterval);
    }
  });
}, 3000);
