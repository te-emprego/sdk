const path = require('path');

const pathModule = source => path.resolve(source, '..', 'src');

module.exports = pathModule;