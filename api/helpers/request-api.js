/**
 * request-api.js
 *
 * @description :: Server-side helper function.
 * @help        :: See http://sailsjs.com/docs/concepts/helpers
 */
var request = require('request');


module.exports = {


  friendlyName: 'Request API',


  description: 'Makes a request to url and signs with config apikey',


  inputs: {
    url: {
      type: 'string',
      description: 'url for api resource',
      required: true,
    }
  },


  fn: function (inputs, exits) {
    request({
      url: `${inputs.url}?api_key=${sails.config.custom.riotApiKey}`,
      json: true
    }, (err, res, body) => {
      if (err) {
        return exits.error(err);
      } else {
        return exits.success(body);
      }
    });
  }


};
