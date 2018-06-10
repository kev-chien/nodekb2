let mongoose = require('mongoose');

//Quiz Schema
// gives some structure to the fields in the table/collection
let quizSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  reviewable: {
    type: Boolean,
    default: false
  },
  plays: {
    type: Number,
    default: 0
  },
});

let Quiz = module.exports = mongoose.model('Quiz', quizSchema);
