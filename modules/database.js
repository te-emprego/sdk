const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

/**@typedef {this.Mongoose} mongoose */
module.exports = mongoose;
