const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{pizza: string}]   
  ,
  total: {
    type: Number
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
