const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required:true
  },
  testDescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },

  normalRange: {
    type: String,
    required: true
  },
  abnormalRange: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
