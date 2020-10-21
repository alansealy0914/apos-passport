const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  custname: {
    type: String,
    required: true
  },
  busnumber: {
    type: String,
    required: true
  },
  phone: {
      type: String,
      required: true
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: false
  },
  country: {
      type: String,
      required: true
  }
});

mongoose.model('Customer', customerSchema);