const jwt = require('jsonwebtoken');

const token = {
  /**
   * Encode some object
   * @param {Any} toEncode
   * @param {String} secret
   */
  async encode(toEncode, secret) {
    secret = secret || process.env.SECRET || 'development';
    const options = {
      expiresIn: '1h',
    };

    const encoded = jwt
      .sign(toEncode, secret, options);

    return encoded;
  },

  /**
   * Decode some object
   * @param {Any} toDecode
   * @param {String} secret
   */
  async decode(toDecode, secret) {
    try {
      const decoded = jwt.decode(toDecode, secret);
      return decoded;
    } catch (error) {
      throw Error(`Could not decode token. ${error.message}`);
    }
  },

  /**
   * Verify some object
   * @param {Any} toDecode
   * @param {String} secret
   */
  async verify(toVerify, secret) {
    try {
      const verified = jwt.verify(toVerify, secret);
      return verified;
    } catch (error) {
      throw Error(`Couldn't authenticate token. ${error.message}`);
    }
  },
};

module.exports = token;
