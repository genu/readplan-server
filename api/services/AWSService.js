var aws = require("aws-lib");
var api = aws.createProdAdvClient(
  sails.config.aws.accessKey,
  sails.config.aws.secretAccessKey,
  sails.config.aws.associateTag
);

module.exports = {
  searchBooks: function(options, done) {
    api.call(
      "ItemSearch",
      {
        SearchIndex: "Books",
        Sort: "relevancerank",
        ResponseGroup: "Images, ItemAttributes",
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
      "ItemLookup",
      {ItemId: ASIN, ResponseGroup: "Images, ItemAttributes"},
      function(err, result) {
        if (err)
          return done(err);

        return done(undefined, result.Items.Item);
      }
    );
  }
};
