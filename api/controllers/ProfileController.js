/**
 * ScheduleController
 *
 * @description :: Server-side logic for managing schedules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findOne: function(req, res) {
    Profile
      .find(req.param('profileId'))
      .populate('resources')
      .then(function(profile) {
        res.ok(profile);
      })
      .catch(function(err) {
        res.serverError(err);
      });
  }
};
