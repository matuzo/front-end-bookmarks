const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');
const links = require('./src/_data/links.json');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy');
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  eleventyConfig.addFilter('random', function(value) {
    return shuffle(value);
  });

  const linkCard = (linkData) => {
    const image = linkData.image
    ? `/images${linkData.image}`
    : '/assets/img/blank.jpg';

    const template = `<li class="bookmark card">
<div>
<h3 class="card__heading">
<a href="${linkData.url}" class="card__link">
  ${linkData.title}
</a>
</h3>
  ${
    linkData.author
      ? `<p class="bookmark__meta"> posted on ${
          linkData.date
            ? `<time>${DateTime.fromISO(linkData.date).toFormat(
                'dd LLL yyyy'
              )}</time>`
            : ''
        } by ${linkData.author}</p>`
      : ''
  }

  ${
    linkData.description
      ? `<p class="card__desc">${linkData.description}</p>`
      : ''
  }
</div>
<img src="${image}" class="bookmark__img" alt="" width="320" loading="lazy">
  
</li>`;
    
    return template
  }

  eleventyConfig.addShortcode('links', function(prop) {
    let template = ` <ol class="bookmarks">`;
    let item
    let linkData

    if (typeof prop === "string") {
      for (let i = 0; i < links[prop].length; i++) {
        linkData = links[prop][i];
        template += linkCard(linkData);
      }
    } else {
      for (let i = 0; i < prop.length; i++) {
        const parts = prop[i].split('.');
        linkData = links[parts[0]].filter(link => link.id === parts[1])[0];
        template += linkCard(linkData);
      }
    }
    template += `</ol>`;

    return template;
  });

  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    templateFormats: ['md', 'njk'],

    pathPrefix: '/',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  };
};
