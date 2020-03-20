const links = require('./src/_data/links.json');
const parseLinks = require('./src/_11ty/parse-links.js');

console.log('Start parsing:')

for (key in links) {
  const item = links[key];

  for (let i = 0; i < item.length; i++) {
    const url = item[i].url;
    const id = item[i].id;
    console.log(url)
    parseLinks.getData(key, url, id);
  }
}

console.log('Finished parsing')
