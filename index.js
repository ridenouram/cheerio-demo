const cheerio = require('cheerio');
const request = require('request');

request({
  method: 'GET',
  url: 'https://twinpeaks.fandom.com/wiki/Audrey_Horne',
}, (err, res, body) => {
  if(err) return console.error(err);
  let $ = cheerio.load(body);
  // let character = $('<h2 class="pi-item pi-item-spacing pi-title" data-source="Title">Audrey Horne</h2>');
  // console.log(character.text());
});
