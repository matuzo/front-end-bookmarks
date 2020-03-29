const parseLinks = require('./src/_11ty/parse-links.js');
var glob = require("glob")

var getDirectories = function (src, callback) {
  glob(src + '/**/*.json', callback);
};

getDirectories('./src/_data/entries', function (err, files) {
  if (err) {
    console.log('Error', err);
  } else {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const links = require(file);
    
      console.log(`Parsing ${file}`);
    
        for (let i = 0; i < links.length; i++) {
          const url = links[i].url;
          const id = links[i].id;

          parseLinks.getData(file, links, url, id);
        }
    }
  }
});

console.log('Finished parsing')
