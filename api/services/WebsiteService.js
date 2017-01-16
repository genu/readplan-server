var unfluff = require('unfluff');
var request = require('request');

module.exports = {
  getContent: function(website, done) {
    request({ uri: website }, function(err, response, body) {
      if (err)
        return done(err);

      return done(undefined, { original: body, readable: unfluff(body) });
    });
  }
};
