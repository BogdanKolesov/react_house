import User from "../models/User.js"
import bcrypt from 'bcryptjs'

//registration
export const registration = async (req, res) => {
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })
        if (isUsed) {
            return res.json({
                message: 'данный username уже занят'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })

        await newUser.save()

        res.json({
            newUser, massage: 'Регистрация прошла успешно'
        })
    } catch (error) {
        res.json({ message: 'Ошибка при создании юзера' })
    }
}

//login
export const login = async (req, res) => {
    try {

    } catch (error) {

    }
}

//get profile
export const getProfile = async (req, res) => {
    try {

    } catch (error) {

    }
}