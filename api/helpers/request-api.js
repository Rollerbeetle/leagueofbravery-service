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
    },
    qs: {
      type: 'json',
      description: 'addtional qs params for endpoint'
    }
  },


  fn: function (inputs, exits) {
    let qs = inputs.qs || {};
    qs['api_key'] = sails.config.custom.riotApi.key;
    request({
      url: `${inputs.url}`,
      qs: qs,
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
