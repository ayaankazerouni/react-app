var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    enum: [
      'sherriff_llama',
      'deep_llama',
      'suspicious_llama',
      'fabulous_llama',
      'awkward_llama',
      'surfer_dude_llama'
    ],
    required: true
  }
});

module.exports = mongoose.model('Vote', Vote);
