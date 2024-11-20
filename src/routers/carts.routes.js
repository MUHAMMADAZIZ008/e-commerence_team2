import { Router } from 'express'
import { createCartController, deleteCartController, getAllCartsController, getCartByIdController, updateCartController } from '../controllers/index.js'

export const cartsRouter = Router()
// TODO: VALIDATION BOLISH KERAK
cartsRouter.get('/', getAllCartsController) // TODO: /ALL
cartsRouter.get('/:id',  getCartByIdController) // ALL/:ID
cartsRouter.post('/',  createCartController)// /CREATE SHUNAQA QILSA YAXSHI BOLADI BU TAKLIF
cartsRouter.put('/:id',  updateCartController)
cartsRouter.delete('/:id',  deleteCartController)