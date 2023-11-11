const router = require('express').Router()

const User = require('../models/user.model')
const Transaction = require('../models/transaction.model')
const authMiddleware = require('../utils/auth.util')

router.get('/info', authMiddleware, async (req, res) => {

    const user = await User.findById(req.user._id)
    if (!user) {
        return res.status(400).json({
            message: 'User not found!'
        })
    }

    let budget = 0
    let spends = 0

    const transactions = await Transaction.find({ 
        user: user._id,
        time: {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        } 
    })

    budget = user.budget.perMonth
    transactions.forEach(transaction => {
        spends += transaction.amount
    })

    const percentageSpent = budget === 0 ? 0: (spends / budget) * 100
    const exceeded = percentageSpent > 100

    return res.status(200).json({
        message: 'Summary fetched!',
        summary: {
            budget,
            spends,
            percentageSpent,
            exceeded
        }
    })

})

module.exports = router