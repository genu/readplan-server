/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function(req, res) {
    Resource.find().then(function(resources) {
      res.ok(resources);
    });
  },
  searchAWS: function(req, res) {
    var query = { keywords: req.param('keywords'), page: req.param('page', 1) };
    AWSService.searchBooks(query, function(err, results) {
      if (err)
        return res.serverError(err);

      return res.ok(results);
    });
  },
  createAWSResource: function(req, res) {
    AWSService.getBookDetails(req.param('ASIN'), function(err, book) {
      if (err)
        return res.serverError(err);

      Resource
        .create({ type: 'book', data: book })
        .then(function() {
          return res.ok(book);
        })
        .catch(function(err) {
          return res.serverError(err);
        });
    });
  },
  createWebsiteResource: function(req, res) {
    var target = req.param('target');

    WebsiteService.getContent(target, function(err, content) {
      if (err)
        return res.serverError(err);

      Resource
        .create({
          type: 'website',
          data: {
            link: target,
            wordCount: HelperService.countWords(content.text)
          }
        })
        .then(function() {
          return res.ok(target);
        })
        .catch(function(err) {
          return res.serverError(err);
        });
    });
  },
  createPDFResource: function(req, res) {},
  createDocResource: function(req, res) {}
};
