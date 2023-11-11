const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const authMiddleware = async (req, res, next) => {
    
    try {

        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                message: 'Not authorized to access this resource!'
            })
        }

        const user = await User.findOne({ username : decoded.username })

        if (!user) {
            return res.status(404).json({
                message: 'User not found!'
            })
        }

        req.user = user
        next()

    } catch (err) {

        return res.status(401).json({
            message: 'Not authorized to access this resource!'
        })

    }

}

module.exports = authMiddleware
