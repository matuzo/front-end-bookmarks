const { DateTime } = require("luxon");
const slugify = require('slugify')

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
module.exports = {
  // Date formatting (human readable)
  readableDate: dateObj => {
    return DateTime.fromISO(dateObj).toFormat('LLLL d, yyyy');
  },

  machineDate: dateObj => {
    var date = DateTime.fromJSDate(dateObj);

    if (!date.isValid) {
      date = DateTime.fromISO(dateObj)
    }
    
    return date.toFormat('yyyy-MM-dd');
  },

  head: (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  },

  sortAlpha: array => {
    return array.sort(function(a, b){
      if(a.data.title < b.data.title) { return -1; }
      if(a.data.title > b.data.title) { return 1; }
      return 0;
  })
  },

  random: value => {
    return shuffle(value);
  },

  log: content => {
    return console.log(content)
  },

  filterByTag: (collection, tag) => {
    const filteredCollection = []
    for (const key in collection) {
      const lang = collection[key];
      for (const prop in lang) {
        for (let i = 0; i < lang[prop].length; i++) {
          const link = lang[prop][i];
          if (link.tags && link.tags.indexOf(tag) !== -1) {
            filteredCollection.push(link);
          } 
          if (tag === 'misc' && !link.tags) {
            filteredCollection.push(link);
          }
        }
      }
    }
    return Array.from(
      new Set(filteredCollection.map(a => a.title))
    ).map(title => {
      return filteredCollection.find(a => a.title === title);
    });
  },

  split: (str, seperator) => {
    return str.split(seperator);
  },

  filterById: (entries, id) => {
    return  entries.filter(entry => entry.id === id)[0];
  },

  slugStrict: string => {
    return slugify(string, {
      lower: true,      // convert to lower case, defaults to `false`
      strict: true     // strip special characters except replacement, defaults to `false`
    })
  }
}
