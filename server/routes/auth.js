import { Router } from 'express'
import { registration, login, getProfile } from '../controllers/auth.js'

const router = new Router()

//registration
router.post('/register', registration)

//login
router.post('/login', login)

//get my profile
router.get('/get-profile', getProfile)

export default router