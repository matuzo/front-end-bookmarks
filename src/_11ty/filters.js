const { DateTime } = require("luxon");

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
    return DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy');
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
  }
}
