/**
 * generate-url.js
 *
 * @description :: Server-side helper function.
 * @help        :: See http://sailsjs.com/docs/concepts/helpers
 */
module.exports = {


  friendlyName: 'Generate Url',

  description: 'Generates API url for endpoint and region',

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
      defaultsTo: 'euw1',
      required: false
    }
  },


  fn: function (inputs, exits) {
    var url = `https://${inputs.platform}.${sails.config.custom.riotApiDomain}${inputs.endpoint}`;
    // All done.
    return exits.success(url);

  }


};
