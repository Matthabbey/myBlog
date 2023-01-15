import express from 'express'
import { LoginUser, RegisterUser, UpdateUser } from '../controller'

const router = express.Router()
 router.post('/register', RegisterUser)
 router.get('/login', LoginUser)
 router.put('/:id', UpdateUser)

 export default router