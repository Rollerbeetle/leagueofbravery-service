/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'get /': 'DefaultController.get',
  'get /version': 'DefaultController.getVersion',

  'get /champions': 'ChampionController.getAll',
  'get /champions/:championId': 'ChampionController.getById',

  'get /static/champions': 'StaticController.getChampions',
  'get /static/champions/:championId': 'StaticController.getChampionById',

  'get /summoner/:id': 'SummonerController.getById',
  'get /summoner/by-name/:name': 'SummonerController.getByName',
  'get /summoner/by-account/:id': 'SummonerController.getByAccount',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
