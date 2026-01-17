const mongoose = require('mongoose');

// Define the person schema
const menuitemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: [{
            type: String,
            enum: ['sweet', 'spicy', 'sour']
        }],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    },
})

//create person model
const menuitems = mongoose.model('menuitems', menuitemsSchema);
module.exports = menuitems;