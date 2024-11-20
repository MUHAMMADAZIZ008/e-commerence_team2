import {
    getAllCartsItem,
    getCartItemById,
    createCartsItem,
    updateCartsItem,
    deleteCartsItem,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export async function getAllCartsItemController(req, res, next) {
    try {

        const data = await getAllCartsItem()
        return res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
export async function getCartItemByIdController(req, res, next) {
    try {

        const data = await getCartItemById(req.params.id)
        return res.status(200).send({
            msg: 'OK',
            data: data,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
export async function createCartItemController(req, res, next) {
    try {
        logger.info()
        const newData = await createCartsItem(req.body)
        return res.status(200).send({
            msg: 'CREATED',
            data: newData,
        })
    } catch (error) {
        logger.error()
        next(error)
    }
}
export async function updateCartItemController(req, res, next) {
    try {
        const updateData = await updateCartsItem(req.params.id, req.body)
        return res.status(200).send({
            msg: 'Updated',
            data: updateData,
        })
    } catch (error) {
        logger.error(
        )
        next(error)
    }
}
export async function deleteCartItemController(req, res, next) {
    try {
        const deleteData = await deleteCartsItem(req.params.id)
        return res.status(200).send({
            msg: 'DELETED',
            data: deleteData,
        })
    } catch (error) {
        logger.error(error

        )
        next(error)
    }
}