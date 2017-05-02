/**
 * handle-api-error.js
 *
 * @description :: Server-side helper function.
 * @help        :: See http://sailsjs.com/docs/concepts/helpers
 */
module.exports = {


  friendlyName: 'Handle api error',


  description: 'Check response for api errors return data to client',

  sync: true,

  inputs: {
    res: {
      type: 'ref',
      description: 'endpoint path',
      required: true
    },
    data: {
      type: 'ref',
      description: 'api response to parse for error codes',
      required: true
    }
  },


  exits: {

  },


  fn: function (inputs, exits) {

    if (inputs.data.status && inputs.data.status.status_code !== 200) {
      return exits.success(inputs.res.status(inputs.data.status.status_code).send(inputs.data.status));
    }

    // All done.
    return exits.success(inputs.res.json(inputs.data));

  }


};
