var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  email: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    enum: [ 'sherriff_llama', 'deep_llama', 'weird_llama', 'hippie_llama', 'awkward_llama', 'surfer_dude_llama' ],
    required: true
  }
});

module.exports = mongoose.model('Vote', Vote);
