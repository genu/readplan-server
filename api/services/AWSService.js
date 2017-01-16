var aws = require('aws-lib');
var api = aws.createProdAdvClient(
  sails.config.globals.aws.accessKey,
  sails.config.globals.aws.secretAccessKey,
  sails.config.globals.aws.associateTag
);

module.exports = {
  searchBooks: function(options, done) {
    api.call(
      'ItemSearch',
      {
        SearchIndex: 'Books',
        Sort: 'relevancerank',
        ResponseGroup: 'Images, ItemAttributes',
        Keywords: options.keywords,
        ItemPage: options.page
      },
      function(err, result) {
        if (err)
          return done(err);

        return done(undefined, result.Items);
      }
    );
  },
  getBookDetails: function(ASIN, done) {
    api.call(
      'ItemLookup',
      { ItemId: ASIN, ResponseGroup: 'Images, ItemAttributes' },
      function(err, result) {
        if (err)
          return done(err);

        return done(undefined, result.Items.Item);
      }
    );
  }
};
