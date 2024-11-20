import { Router } from 'express'
import { createOrderController, deleteOrderByIdController, getAllOrdersController, getOrderByIdController } from '../controllers/orders.controller.js'


export const orderRouter = Router()
// TODO: VALIDATION YO`Q....
orderRouter.get('/',  getAllOrdersController)
orderRouter.get('/:id', getOrderByIdController)
orderRouter.post('/', createOrderController)
orderRouter.delete('/:id', deleteOrderByIdController
)






