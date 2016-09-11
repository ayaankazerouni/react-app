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
      'photogenic_llama',
      'surfer_dude_llama',
      'happy_llama',
      'unhappy_llama',
      'canadian_llama'
    ],
    required: true
  }
});

module.exports = mongoose.model('Vote', Vote);
