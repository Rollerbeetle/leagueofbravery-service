/**
 * ChampionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * `ChampionController.getAll()`
   */
  getAll: function (req, res) {
    let region = req.param('region');

    let url = sails.helpers.generateUrl({endpoint: `/lol/platform/v3/champions`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  },

  /**
   * `ChampionController.getById()`
   */
  getById: function (req, res) {
    let id = req.param('championId');
    let region = req.param('region');
    if (!id) {
      return res.serverError('missing championId');
    }
    let url = sails.helpers.generateUrl({endpoint: `/lol/platform/v3/champions/${id}`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  }

};
