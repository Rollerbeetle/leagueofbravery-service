/**
 * MasteryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  getAll: function (req, res) {
    let region = req.param('region');
    let id = req.param('summonerId');

    if (!id) {
      return res.serverError('missing summonerId');
    }

    let url = sails.helpers.generateUrl({endpoint: `/lol/champion-mastery/v3/champion-masteries/by-summoner/${id}`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  },
  getScores: function (req, res) {
    let region = req.param('region');
    let id = req.param('summonerId');

    if (!id) {
      return res.serverError('missing summonerId');
    }

    let url = sails.helpers.generateUrl({endpoint: `/lol/champion-mastery/v3/scores/by-summoner${id}`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => res.json(data)
    });

  },
};
