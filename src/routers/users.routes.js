import express from 'express'
import {
    createUserController,
    deleteUserController,
    getAllUserController,
    getUserByIdController,
    updateUserController
} from '../controllers/index.js'
import { userSchema } from '../validators/index.js'
import { authGuard, checkSchema, roleGuard } from '../middlewares/index.js'

export const usersRouter = express()

usersRouter.get('/', getAllUserController)
usersRouter.get('/:id', getUserByIdController)
usersRouter.post('/', createUserController)
usersRouter.put('/:id',  updateUserController)
usersRouter.delete('/:id', deleteUserController)