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

    let status = inputs.data.status;
    if (status && status.status_code !== 200) {
      let err = {
        code: status.status_code,
        message: status.message
      };
      return exits.success(inputs.res.status(424).send(err));
    }

    // All done.
    return exits.success(inputs.res.json(inputs.data));

  }


};
