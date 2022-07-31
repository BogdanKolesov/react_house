import { Router } from 'express'
import { registration, login, getProfile } from '../controllers/auth.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

//registration
router.post('/registration', registration)

//login
router.post('/login', login)

//get my profile
router.get('/get-profile', checkAuth, getProfile)

export default router