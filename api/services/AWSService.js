var aws = require("aws-lib");
var api = aws.createProdAdvClient(sails.config.aws.accessKey, sails.config.aws.secretAccessKey, sails.config.aws.associateTag);

module.exports = {
  findBook: function (query, done) {
    api.call('ItemSearch2', {SearchIndex: "Books", Keywords: query.name}, function (err, result) {
      if (err) return done(err);

      return done(undefined, result.Items);
    })
  }
};
