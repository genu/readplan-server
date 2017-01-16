module.exports = {
  countWords: function(input) {
    var index = {},
      words = input
        .replace(/[.,?!;()"'-]/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .split(' ');

    return words.length;
  }
};
