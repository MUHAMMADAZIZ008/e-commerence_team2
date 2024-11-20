import { Router } from 'express'


export const cartsItemRouter = Router()

cartsItemRouter.get('/', getAllCartsItemController)
cartsItemRouter.get('/:id',  getCartItemByIdController)
cartsItemRouter.post('/',  createCartItemController)
cartsItemRouter.put('/:id',  updateCartItemController)
cartsItemRouter.delete('/:id',  deleteCartItemController)