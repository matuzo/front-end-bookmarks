const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const filters = require('./src/_11ty/filters.js')
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // Transforms
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Collections
  eleventyConfig.addCollection("entriesSorted", function(collection) {
      return collection.getFilteredByTag("entry").sort(function(a, b){
        if(a.data.title < b.data.title) { return -1; }
        if(a.data.title > b.data.title) { return 1; }
        return 0;
    })
  });

  eleventyConfig.addPassthroughCopy({
    './src/assets/favicon': '/',
    './src/images': '/images',
    './src/assets': '/assets'
  });

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
