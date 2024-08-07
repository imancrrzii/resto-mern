const mongoose = require('mongoose');
const {Schema} = mongoose;

// schema model
const paymentSchema = new Schema({
    transitionId: String,
    email: String,
    price: Number,
    quantity: Number,
    status: String,
    itemName: Array,
    cartItems: Array,
    menuItems: Array,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create a model instance
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;