const app = require('./app');
const routerRegister = require('./routerRegister');
const database = require('./database');
const res = require('./response');
const log = require('./log');

module.exports = {
  app,
  routerRegister,
  database,
  res,
  log,
};
