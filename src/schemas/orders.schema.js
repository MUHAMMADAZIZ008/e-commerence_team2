import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required: true,
    },
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
        required: true,
    },
},{timestamps: true});

export const Orders = mongoose.model("Order", ordersSchema);
