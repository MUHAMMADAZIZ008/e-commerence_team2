import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required: true,
    },
    total: {
        type: real,
        required: true,
        unique: true,
    },
},{timestamps: true});

export const Carts = mongoose.model("Carts", cartsSchema);
