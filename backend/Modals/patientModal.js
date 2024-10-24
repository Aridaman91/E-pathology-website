const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  address: {
    type: String,
    required: true
  },
  bookHomeTest: {
    type: Boolean,
    required: true,
    default: false
  }
 
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
