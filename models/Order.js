const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
      pizza: {
          type: mongoose.Schema.Types.ObjectId,

          ref: 'Pizza',
           required: true 
           }
      }
     ]
  ,
  total: {
    type: Number,
    
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
