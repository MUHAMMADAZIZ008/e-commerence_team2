import mongoose from 'mongoose';
import { Cart } from '../models/cart.js'; 

export const getAllCart = async () => {
    try {
        const data = await Cart.find(); 
        if (!data.length) {
            throw new Error('Carts not found');
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getCartById = async (id) => {
    try {
        const data = await Cart.findById(id); 
        if (!data) {
            throw new Error('Cart not found');
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const createCart = async (cart) => {
    try {
        const newCart = new Cart(cart); 
        const data = await newCart.save(); 
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const updateCartById = async (id, cart) => {
    try {
        const currentCart = await getCartById(id); 
        const update = await Cart.findByIdAndUpdate(
            id,
            { total: cart.total || currentCart.total }, 
            { new: true } 
        );
        if (!update) {
            throw new Error('Cart not updated for some reason');
        }
        return update;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteCartById = async (id) => {
    try {
        const deleted = await Cart.findByIdAndDelete(id); 
        if (!deleted) {
            throw new Error('Cart not deleted for some reason');
        }
        return deleted;
    } catch (error) {
        throw new Error(error.message);
    }
}
