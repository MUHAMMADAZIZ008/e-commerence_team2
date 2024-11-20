import pool from '../databases/index.js'

export const getAllCartsItem = async () => {
    try {
        const data = await CartItem.find();
        if (!data) {
            throw new Error('Carts-Item not found')
        }
        return data;
    } catch (error) {
        throw new Error(error)
    }
};

export const getCartItemById = async (id) => {
    try {
        const data = await CartItem.findById(id);
        if (!data) {
            throw new Error('Carts-Item not found')
        }
        return data;
    } catch (error) {
        throw new Error(error)
    }
};

export const createCartsItem = async (cartItem) => {
    try {
        const data = await CartItem.create({
            cart_id: cartItem.cart_id,
            product_id: cartItem.product_id,
            quantity: cartItem.quantity
        });
        if (!data) {
            throw new Error('Carts-Item not created with some reason')
        }
        return data;
    } catch (error) {
        throw new Error(error)
    }
};

export const updateCartsItem = async (id, cartItem) => {
    try {
        const oldData = await getCartItemById(id);
        const changed = await CartItem.findByIdAndUpdate(
            id,
            { quantity: cartItem.quantity || oldData.quantity },
            { new: true }
        );
        if (!changed) {
            throw new Error('Carts-Item not updated with some reason')
        }
        return changed;
    } catch (error) {
        throw new Error(error)
    }
};

export const deleteCartsItem = async (id) => {
    try {
        const removeData = await CartItem.findByIdAndDelete(id);
        if (!removeData) {
            throw new Error('Carts-Item not updated with some reason')
        }
        return removeData;
    } catch (error) {
        throw new Error(error)
    }
};