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
    let region = req.param('region');
    let champListData = req.param('champListData') || 'image';

    let url = sails.helpers.generateUrl({endpoint: `/lol/static-data/v3/champions`, platform: region}).execSync();

    sails.helpers.requestApi({url, qs: {champListData}}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  },

  /**
   * `StaticController.getChampionById()`
   */
  getChampionById: function (req, res) {
    let id = req.param('championId');
    let region = req.param('region');


    let champData = req.param('champData');

    if (!id) {
      return res.serverError('missing championId');
    }
    let url = sails.helpers.generateUrl({endpoint: `/lol/static-data/v3/champions/${id}`, platform: region}).execSync();

    sails.helpers.requestApi({url, qs: {champData}}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  }

};
