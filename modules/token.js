const jwt = require('jsonwebtoken');

const token = {
  secret: process.env.SECRET || 'development',
  /**
   * Encode some object
   * @param {Any} toEncode
   * @param {String} secret
   */
  async encode(toEncode) {
    const options = {
      expiresIn: '1h',
    };

    const encoded = jwt
      .sign(toEncode, this.secret, options);

    return encoded;
  },

  /**
   * Decode some object
   * @param {Any} toDecode
   * @param {String} secret
   */
  async decode(toDecode) {
    try {
      const decoded = jwt.decode(toDecode, this.secret);
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
  async verify(toVerify) {
    try {
      const verified = jwt.verify(toVerify, this.secret);
      return verified;
    } catch (error) {
      throw Error(`Couldn't authenticate token. ${error.message}`);
    }
  },
};

module.exports = token;
