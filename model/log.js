const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  date: {
    type: Date,
    require: true,
  },
  ip: {
    type: String,
    require: true,
  },
  encoding: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  os: {
    type: String,
    require: true,
  },
  method: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Log', LogSchema);
