/**
 * ScheduleController
 *
 * @description :: Server-side logic for managing schedules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res) {},
  shift: function(req, res) {
    Resource
      .find(req.param('resource'))
      .then(function(resource) {
        resource.shift();
        res.ok();
      })
      .catch(function(err) {
        res.serverError(err);
      });
  }
};
