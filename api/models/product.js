const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
 
  partnumber: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },

});

mongoose.model('Product', productSchema);