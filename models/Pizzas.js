const mongoose = require('mongoose');

const pizzasSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true},
        mass: { type: String, required: true },
        size: { type: String, required: true},
        dip: {type: String, required: true},
        ingredients: [{type: mongoose.Types.ObjectId, required: true, ref:"Ingredients"}],
        price: { type: Number, required: true},
        account: {type: Number},
        picture: String,
    },
    {
        timestamps: true
    }
)

const Pizzas = mongoose.model('Pizzas', pizzasSchema);

module.exports = Pizzas;
