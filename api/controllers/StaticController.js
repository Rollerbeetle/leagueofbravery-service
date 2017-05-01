/**
 * StaticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * `StaticController.getChampions()`
   */
  getChampions: function (req, res) {

    let champData = req.param('champData');

    let url = sails.helpers.generateUrl({endpoint: `/lol/static-data/v3/champions`}).execSync();

    sails.helpers.requestApi({url, qs: {champData}}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  },

  /**
   * `StaticController.getChampionById()`
   */
  getChampionById: function (req, res) {
    let id = req.param('championId');

    let champData = req.param('champData');

    if (!id) {
      return res.serverError('missing championId');
    }
    let url = sails.helpers.generateUrl({endpoint: `/lol/static-data/v3/champions/${id}`}).execSync();

    sails.helpers.requestApi({url, qs: {champData}}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  }

};
