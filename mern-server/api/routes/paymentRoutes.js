const express = require('express');
const Payment = require('../models/Payment');
const mongoose = require('mongoose');
const router = express.Router();
const Cart = require('../models/Carts');
const ObjectId = mongoose.Types.ObjectId;
// token
const verifyToken = require('../middleware/verifyToken');

// post a payment
router.post('/', verifyToken, async (req, res) => {
    const payment = req.body;
    try {
        const paymentRequest = await Payment.create(payment);

        // delete cart after payment
        const cartIds = payment.cartItems.map(id => new ObjectId(id));
        const deletedCarts = await Cart.deleteMany({ _id: { $in: cartIds} }); 
        res.status(200).json({paymentRequest, deletedCarts});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

// get all payments
router.get('/', verifyToken, async (req, res) => {
    const email = req.query.email;
    const query = {email: email};
    try {
        const decodedEmail = req.decoded.email;
        if(email !== decodedEmail){
            return res.status(403).send({message: "Forbidden access"})
        }
        const payments = await Payment.find(query).sort({createdAt: -1}).exec();
        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = router