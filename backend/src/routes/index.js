const userRoutes = require('./user.routes')
const summaryRoutes = require('./summary.routes')

const combineRoutes = (app) => {
    app.use('/api/user', userRoutes)
    app.use('/api/summary', summaryRoutes)
}

module.exports = combineRoutes