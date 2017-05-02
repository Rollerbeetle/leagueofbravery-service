/**
 * SummonerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getById: function (req, res) {
    let region = req.param('region');
    let id = req.param('summonerId');
    if (!id) {
      return res.serverError('missing summonerId');
    }

    let url = sails.helpers.generateUrl({endpoint: `/lol/summoner/v3/summoners/${id}`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => sails.helpers.handleApiError({res, data}).execSync(),
    });

  },

  getByName: function (req, res) {
    let region = req.param('region');
    let name = req.param('name');


    let url = sails.helpers.generateUrl({endpoint: `/lol/summoner/v3/summoners/by-name/${name}`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => sails.helpers.handleApiError({res, data}).execSync(),
    });

  },

  getByAccount: function (req, res) {
    let region = req.param('region');
    let id = req.param('accountId');
    if (!id) {
      return res.serverError('missing accountId');
    }

    let url = sails.helpers.generateUrl({endpoint: `/lol/summoner/v3/summoners/by-account/${id}`, platform: region}).execSync();

    sails.helpers.requestApi({url}).exec({
      error: (err) => res.serverError(err),
      success: (data) => sails.helpers.handleApiError({res, data}).execSync()
    });

  },

};
