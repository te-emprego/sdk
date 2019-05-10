/* eslint-disable global-require */
const { get, has } = require('lodash');
const response = require('./response');

const getParams = (source, req) => {
  const params = [];

  source.forEach((param) => {
    let defaultValue;
    let defaultKey = param;

    if (typeof param === 'object') {
      defaultValue = param.default;
      defaultKey = param.name;
    }

    has(req, defaultKey)
      ? params.push(get(req, defaultKey))
      : params.push(defaultValue);
  });
  return params;
};

const routeWrapper = (method, { params, controller }) => async (req, res) => {
  method(...getParams(params, req))
    .then(data => response._.mount(data, res))
    .catch(error => response._.serverError(error, res, controller));
};

const registerSingleRoute = (route, router) => {
  const { path, method, _private } = route;

  const controller = require(`../src/controller/${_private.controller}`);

  router[method](path, routeWrapper(controller, _private));
};

const routerRegister = (app, mapping) => {
  mapping.app.routes
    .forEach(route => registerSingleRoute(route, app));
};

module.exports = routerRegister;
