/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    var results = AWSService.findBook({name: "Hunger Games"}, function(err, results){
      if(err) return res.serverError(err);

      return res.ok(results);
    });
  }
};
