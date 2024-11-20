import { createCart, deleteCartById, getAllCart, getCartById, updateCartById } from '../services/cart.service.js'
import { logger } from '../utils/index.js'


export const getAllCartsController = async(req, res, next) => {
    try {
        const allcarts = await getAllCart()
        return res.status(200).send({
            msg: 'Ok',
            data: allcarts,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
export const getCartByIdController = async (req, res, next) => {
    try {
        const cartByid = await getCartById(req.params.id)
        return res.status(200).send({
            msg: 'Ok',
            data: cartByid,
        })
    } catch (error) {
        logger.error(
                    error
        )
        next(error)
    }
}
export  const createCartController = async (req, res, next) => {
    try {

        const newCart = await createCart(req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: newCart,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
export const updateCartController = async(req, res, next) => {
    try {
        const changeCart = await updateCartById(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: changeCart,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
export const deleteCartController = async(req, res, next) => {
    try {

        const remove = await deleteCartById(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Ok',
            data: remove,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}