/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  search: function(req, res) {
    var query = { keywords: req.param('keywords'), page: req.param('page', 1) };
    AWSService.searchBooks(query, function(err, results) {
      if (err)
        return res.serverError(err);

      return res.ok(results);
    });
  },
  create: function(req, res) {
    AWSService.getBookDetails(req.param('ASIN'), function(err, book) {
      Book.create(book).then(function() {
        if (err)
          return res.serverError(err);

        return res.ok(book);
      });
    });
  }
};
