import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  total: {
    type: Number, 
    required: true,
    min: 0
  }
}, {
  timestamps: true 
});

export const Cart = mongoose.model('Cart', cartSchema);

