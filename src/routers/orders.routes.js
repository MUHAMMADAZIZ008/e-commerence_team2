import { Router } from 'express'
import { validateOrders, authGuard, roleGuard } from '../middlewares/index.js'
import { createOrderController, deleteOrderByIdController, getAllOrdersController, getOrderByIdController } from '../controllers/orders.controller.js'


export const orderRouter = Router()
orderRouter.get('/',  getAllOrdersController)
orderRouter.get('/:id', getOrderByIdController)
orderRouter.post('/', createOrderController)
orderRouter.delete('/:id', deleteOrderByIdController
)






