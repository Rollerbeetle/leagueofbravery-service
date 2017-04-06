/**
 * DefaultController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * `DefaultController.get()`
   */
  get: function (req, res) {
    return res.ok();
  },
  /**
   * `DefaultController.getVersion()`
   */
  getVersion: function (req, res) {
    return res.json({
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
      git: {
        hash: process.env.npm_package_gitHead,
      },
      uptime: process.uptime(),
      nodeVersion: process.version,
      nodeEnv: process.env.NODE_ENV || sails.config.environment,
      port: sails.config.port,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage()
    });
  }
};
