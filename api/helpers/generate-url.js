/**
 * generate-url.js
 *
 * @description :: Server-side helper function.
 * @help        :: See http://sailsjs.com/docs/concepts/helpers
 */
module.exports = {


  friendlyName: 'Generate Url',

  description: 'Generates API url for endpoint and platform',

  sync: true,

  inputs: {
    endpoint: {
      type: 'string',
      description: 'endpoint path',
      required: true
    },
    platform: {
      type: 'string',
      description: 'platform name',
      defaultsTo: 'default',
      required: false
    }
  },


  fn: function (inputs, exits) {
    let platform = sails.config.custom.riotApi.platforms[inputs.platform.toLowerCase()] || sails.config.custom.riotApi.platforms['default'] ;

    var url = `https://${platform}.${sails.config.custom.riotApi.domain}${inputs.endpoint}`;
    // All done.
    return exits.success(url);

  }


};
