/* jshint esversion: 6 */

const knex = require("knex");
const config = require("../knexfile");

const env = process.env.NODE_ENV || "development";
const configOptions = config[env]

module.exports = knex(configOptions);
