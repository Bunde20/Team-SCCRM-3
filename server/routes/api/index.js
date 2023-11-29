const router = require('express').Router()
const userRoutes = require('./userRoutes')
const loginRoutes = require('./loginRoutes')
const cardRoutes = require('./cardRoutes')

router.use('/users', userRoutes)
router.use('/login', loginRoutes)
router.use('/cards', cardRoutes)

module.exports = router;