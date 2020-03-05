const slugify = require('slugify');
const fs = require('fs');
const download = require('image-downloader');
const got = require('got');
const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('./metascraper-image.js')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);
const sharp = require('sharp');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const linksFile = './src/_data/links.json'
let linksData = fs.readFileSync(linksFile);
let links = JSON.parse(linksData);

const slugifySettings = {
  remove: /[*+~.()/'"!:@]/g,
  lower: true
}

const getUrlSlug = url => {
  return slugify(url, slugifySettings)
}

const checkIfFileExists = url => {
  console.log(url)
  console.log(getUrlSlug(url))
  console.log(links[getUrlSlug(url)])
   if (links[getUrlSlug(url)]) {
      return links[getUrlSlug(url)];
    }

  return false
}

const getNewImageFileName = metadata => {
  const image = metadata.image.replace(/\?.*$/,"");
  const imageParts = image.split('.');
  const extension = imageParts[imageParts.length - 1];
  return `/${slugify(metadata.title, slugifySettings)}.${extension}`;
}

const downloadImage = (metadata) => {
  const image = metadata.image;
  const newFileName = getNewImageFileName(metadata);

  const options = {
    url: image,
    dest: `./src/images/${newFileName}` 
  };

  download
    .image(options)
    .then(({ filename, image }) => {
      console.log('Saved to', filename); 

      sharp(filename)
      .resize(640)
      .toBuffer()
      .then(data => {
        fs.writeFile(filename, data, function(err) {
          if (err) {
            return console.log(err);
          }
          console.log('The file was saved!');
        });
      })
    })
    .catch(err => console.error(err));
}

const getData = async (targetUrl) => {

  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  const entry = {
    title: entities.encode(metadata.title)
  }

  if (metadata.description) {
    entry.description = entities.encode(metadata.description)
  }

  if (metadata.author) {
    entry.author = metadata.author
  }

  if (metadata.date) {
    entry.date = metadata.date
  }

  if (metadata.image) {
    console.log(metadata.image)
    downloadImage(metadata);
    entry.image = getNewImageFileName(metadata)
  }

  links[slugify(url, slugifySettings)] = entry;
  
  fs.writeFile(linksFile, JSON.stringify(links), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });

  //console.log(metadata)
  return entry
}

module.exports = {
 exists: checkIfFileExists,
 getData: getData,
 getUrlSlug: getUrlSlug
}


