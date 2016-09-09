var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  email: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    enum: [ 'sherriff_llama', 'deep_llama', 'weird_llama', 'cool_dude_llama', 'awkward_llama' ],
    required: true
  }
});

module.exports = mongoose.model('Vote', Vote);
