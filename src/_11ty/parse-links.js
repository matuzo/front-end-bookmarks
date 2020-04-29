const slugify = require('slugify');
const fs = require('fs');
const download = require('image-downloader');
const got = require('got');
const metascraper = require('metascraper')([
  require('./metascraper-author.js')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('./metascraper-image.js')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);
const sharp = require('sharp');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const slugifySettings = {
  remove: /[*+~.,—?(#)<=>/'"!:@]/g,
  lower: true
}
slugify.extend({'<': ''})
slugify.extend({'>': ''})

const getNewImageFileName = metadata => {
  const image = metadata.image.replace(/\?.*$/,"");
  const imageParts = image.split('.');
  const extension = imageParts[imageParts.length - 1];
  return `/${slugify(metadata.title, slugifySettings)}.${extension}`;
}

const downloadImage = (metadata, success, error) => {
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
            error();
            return console.log(err);
          }
          success();
          console.log('The file was saved!');
        });
      })
    })
    .catch(err => {
      error();
      console.error(err)
    });
}

const writeLinks = (linksFile, links) => {
  fs.writeFile(linksFile, JSON.stringify(links, null, 2), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });
}

const getData = async (file, links, targetUrl, id) => {
  links.map(async link => {
    if (link.id === id) {
      if (!link.processed) {
        const { body: html, url } = await got(targetUrl);
        const metadata = await metascraper({ html, url });
        
        link.title = entities.encode(metadata.title);
        if (metadata.description) {
          link.description = entities.encode(metadata.description)
        }
      
        if (metadata.author) {
          link.author = metadata.author
        }
      
        if (metadata.date) {
          link.date = metadata.date
        }

        if (metadata.image) {
          console.log(url.indexOf('developer.mozilla.org'))
          if (url.indexOf('developer.mozilla.org') !== -1) {
            link.image = '/mdn.png'
            link.author = 'MDN'
            link.processed = true;
            writeLinks(file, links);
          } else {
            downloadImage(metadata, function() {
              link.image = getNewImageFileName(metadata)
              link.processed = true;
              writeLinks(file, links);
            }, function() {
              link.processed = true;
              writeLinks(file, links);
            });
          }

          console.log(metadata.image)
        } else {
          link.processed = true;
          writeLinks(file, links);
        }
      } else {
        console.log('already processed')
      }
    }
  })
}

module.exports = {
 getData: getData
}


