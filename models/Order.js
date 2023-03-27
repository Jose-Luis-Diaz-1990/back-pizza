const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{type:String}]
  ,
  total: {
    type: Number,
    
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
