const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');
const linkFiles = {
  "html":  require('./src/_data/html.json'),
  "js": require('./src/_data/js.json'),
  "css": require('./src/_data/css.json'),
}

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

  eleventyConfig.addFilter('sortAlpha', (array) => {
    return array.sort(function(a, b){
        if(a.data.title < b.data.title) { return -1; }
        if(a.data.title > b.data.title) { return 1; }
        return 0;
    })
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

    let template = `<li class="bookmark card">
<div>
<h3 class="card__heading">
<a href="${linkData.url}" class="card__link">
  ${linkData.title}
</a>
</h3>
  ${
    linkData.date
      ? `<p class="bookmark__meta"> posted on
            <time>${DateTime.fromISO(linkData.date).toFormat(
                'dd LLL yyyy'
              )}</time>
          ${linkData.author ? `by ${linkData.author}</p>` : ``}`
      : ''
  }

  ${
    linkData.description
      ? `<p class="card__desc">${linkData.description}</p>`
      : ''
  }`;

  if (linkData.tags) {
    template += `<div class="tag-container">Tags: <ul class="tags">`
    
      for (let i = 0; i < linkData.tags.length; i++) {
        const tag = linkData.tags[i];
        template += `<li class="tags__tag">
        <span class="tags__link tags__link--${tag}">
          ${tag}
        </span>
      </li>`
      }
    
    template += `</ul></div>`
    }
    template += `
</div>
<img src="${image}" class="bookmark__img" alt="" width="320" loading="lazy">
</li>`;
    
    return template
  }

  eleventyConfig.addShortcode('links', function(prop, type) {
    let links = linkFiles[type]
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
        links = linkFiles[parts[0]]
        linkData = links[parts[1]].filter(link => link.id === parts[2])[0];
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
