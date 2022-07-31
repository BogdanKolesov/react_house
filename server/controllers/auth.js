import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//registration
export const registration = async (req, res) => {
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })
        if (isUsed) {
            return res.json({
                message: 'Данный username уже занят'
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
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({
                message: 'Такого юзера не существует'
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Неверный пароль'
            })
        }
        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET,
            { expiresIn: '30d' })
        res.json({
            token,
            user,
            message: `Вы вошли в сиситему "Умный дом"`
        })
    } catch (error) {
        res.json({ message: 'Ошибка при авторизации' })
    }
}

//get profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.json({
                message: 'Такого юзера не существует'
            })
        }
        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET,
            { expiresIn: '30d' })
        res.json({
            user,
            token
        })
    } catch (error) {
        res.json({ message: 'Нет доступа' })

    }
}