const slugify = require('slugify');
const parseLinks = require('./src/_11ty/parse-links.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
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

  eleventyConfig.addFilter("random", function(value) {
    return shuffle(value)
   });

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('link', async function(targetUrl) {
    let linkData;

    return await (async () => {
      if (parseLinks.exists(targetUrl)) {
        // console.log('get' + targetUrl);
        linkData = parseLinks.exists(targetUrl);
      } else {
        console.log('write' + targetUrl);

        linkData = await parseLinks.getData(targetUrl);
      }
      const image =   linkData.image
      ? `/images${linkData.image}`
      : '/assets/img/blank.jpg';

      const item = `<li class="bookmark">
      <h3 class="bookmark__heading">
      <a href="${targetUrl}" class="bookmark__link">
        ${linkData.title}
      </a>
    </h3>
    <img src="${image}" class="bookmark__img" alt="">

  ${
    linkData.author
      ? `<p class="bookmark__meta"> posted on ${
          linkData.date ? `<time>${DateTime.fromJSDate(linkData.date).toFormat("dd LLL yyyy")}</time>` : ''
        } by ${linkData.author}</p>`
      : ''
  }

  ${linkData.description ? `<p>${linkData.description}</p>` : ''}
</li>
`;
      return item;
    })();
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
