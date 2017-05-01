/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * http://sailsjs.com/config/custom
*/

module.exports.custom = {

  /**************************************************************************
  *                                                                          *
  * Default settings for custom configuration used in your app.              *
  * (these may also be overridden in config/env/production.js)               *
  *                                                                          *
  ***************************************************************************/
  riotApi: {
    domain:'api.riotgames.com',
    key: 'bc391236-7615-4266-93e1-ac2141254538',
    platforms: {
      default: 'euw1',
      br: 'br1',
      eune: 'eun1',
      jp: 'jp1',
      kr: 'kr',
      lan: 'la1',
      las: 'la2',
      na: 'na1',
      oce: 'oc1',
      tr: 'tr1',
      ru: 'ru',
      pbe: 'pbe1',
      global: 'global'
    }
  }
};
