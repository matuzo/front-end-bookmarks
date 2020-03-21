const parseLinks = require('./src/_11ty/parse-links.js');
const files = ['js', 'html', 'css']
console.log('Start parsing:')
const fs = require('fs');

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const filePath = `./src/_data/${file}.json`
  const links = require(filePath);

  // let linksData = fs.readFileSync(filePath);
  // let linksData = JSON.parse(links);

  console.log(`Parsing ${filePath}`);
console.log(links)
  for (key in links) {
    const item = links[key];



    for (let i = 0; i < item.length; i++) {
      const url = item[i].url;
      const id = item[i].id;
  //     console.log(file)
  //     console.log(key)
  //     console.log(url)
  //     console.log(id)
  //     console.log(linksData)
      parseLinks.getData(filePath, links, file, key, url, id);
    }
  }
}

console.log('Finished parsing')
