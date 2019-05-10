const jwt = require('jsonwebtoken');

const token = {
  secret: process.env.SECRET || 'development',
  /**
   * Encode some object
   * @param {Any} toEncode
   * @param {String} secret
   */
  async encode(toEncode) {
    return new Promise((resolve, reject) => {
      const options = {
        expiresIn: '1h',
      };

      try {
        const encoded = jwt
          .sign(toEncode, this.secret, options);
        resolve(encoded);
      } catch (error) {
        reject(error.message);
      }
    })
  },

  /**
   * Decode some object
   * @param {Any} toDecode
   * @param {String} secret
   */
  async decode(toDecode) {
    return new Promise((resolve, reject) => {
      try {
        const decoded = jwt.decode(toDecode, this.secret);
        resolve(decoded);
      } catch (error) {
        reject(`Could not decode token. ${error.message}`);
      }
    })
  },

  /**
   * Verify some object
   * @param {Any} toDecode
   * @param {String} secret
   */
  async verify(toVerify) {
    return new Promise((resolve, reject) => {
      try {
        const verified = jwt.verify(toVerify, this.secret);
        resolve(verified);
      } catch (error) {
        reject(`Couldn't authenticate token. ${error.message}`);
      }
    });
  },
};

module.exports = token;
