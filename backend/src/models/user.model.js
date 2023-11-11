const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
         type: String,
         required: true
    },
    budget: {
        perMonth: {
            type: Number,
            default: 0
        },
        categories: {
            type: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    amount: {
                        type: Number,
                        default: 0
                    }
                }
            ]
        }
    }
})

module.exports = mongoose.model('User', userSchema)