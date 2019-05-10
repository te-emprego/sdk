const app = require('./app');
const routerRegister = require('./routerRegister');
const database = require('./database');
const res = require('./response');
const log = require('./log');
const path = require('./path');

module.exports = {
  app,
  routerRegister,
  database,
  res,
  log,
  path,
};
