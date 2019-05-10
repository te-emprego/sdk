const token = require('./token');

/**
 * Get the actual authorization token
 * @param {Request} request
 */
function getAuthorizationToken(request) {
  const { headers } = { ...request };
  return headers.authorization.split(' ')[1];
}

/**
 * Sends the error message to client
 * @param {String} message
 * @param {Response} response
 */
function sendError(message, response) {
  response
    .status(400)
    .send({ message });
}

/**
 * Validates request token
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const authenticate = (req, res, next) => {
  const secret = process.env.SECRET || 'development';
  const requestToken = getAuthorizationToken(req);

  token
    .verify(requestToken, secret)
    .then(next)
    .catch(error => sendError(error.message, res));
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const login = (req, res) => {

};

module.exports = {
  authenticate,
};
