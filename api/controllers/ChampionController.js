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

    let region = req.param('region') || 'euw';
    let url = sails.helpers.generateUrl({endpoint: `/api/lol/${region}/v1.2/champion`}).execSync();

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
    let region = req.param('region') || 'euw';

    if (!id) {
      return res.serverError('missing championId');
    }
    let url = sails.helpers.generateUrl({endpoint: `/api/lol/${region}/v1.2/champion/${id}`}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  }

};
