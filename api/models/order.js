const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  custname: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  busnumber: {
    type: String,
    required: true
  },
  ordernumber: {
      type: String,
      required: true
  },
  partnumber: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  items: {
    type: String,
    count: Number,
    required: true
  },
  orderdate: {
    type: String,
    required: false
  }
});

mongoose.model('Order', orderSchema);