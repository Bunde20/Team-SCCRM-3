const router = require('express').Router()

const { completeTrade } = require('../../controllers/tradeControllers')

router.route('/:user1/:card1/:user2/:card2').put(completeTrade)

module.exports = router;