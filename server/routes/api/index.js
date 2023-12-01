const router = require('express').Router()
const userRoutes = require('./userRoutes')
const loginRoutes = require('./loginRoutes')
const cardRoutes = require('./cardRoutes')
const tradeRoutes = require('./tradeRoutes')

router.use('/users', userRoutes)
router.use('/login', loginRoutes)
router.use('/cards', cardRoutes)
router.use('/trade', tradeRoutes)

module.exports = router;