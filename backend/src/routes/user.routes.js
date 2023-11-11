const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
const authMiddleware = require('../utils/auth.util')

router.post('/sign-up', async (req, res) => {

    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please provide a username and password!'
        })
    }

    const { username, password } = req.body

    const duplicateUser = await User.findOne({ username })
    if (duplicateUser) {
        return res.status(400).json({
            message: 'Username already exists!'
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
        username,
        password: hashedPassword
    })

    await newUser.save()

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '7d' })

    return res.status(201).json({
        message: 'User created!',
        info: {
            username,
            token,
            id: newUser._id
        }
    })

})

router.post('/sign-in', async (req, res) => {

    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please provide a username and password!'
        })
    }

    const { username, password } = req.body

    const userFind = await User.findOne({ username })
    if (!userFind) {
        return res.status(400).json({
            message: 'Username does not exist!'
        })
    }

    const validPassword = await bcrypt.compare(password, userFind.password)
    if (!validPassword) {
        return res.status(400).json({
            message: 'Invalid password!'
        })
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '7d' })

    return res.status(200).json({
        message: 'User logged in!',
        info: {
            username,
            token,
            id: userFind._id
        }
    })

})

router.get('/verify', authMiddleware, async (req, res) => {
    return res.status(200).json({
        message: 'User verified!',
        info: {
            username: req.user.username,
            id: req.user._id,
        }
    })
})

module.exports = router