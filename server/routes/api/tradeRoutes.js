const router = require("express").Router();

const {
  completeTrade,
  getAllTradeOffers,
  createNewTradeOffer,
  getOneTradeOffer,
  deleteOneTradeOffer,
} = require("../../controllers/tradeControllers");

router.route("/offers").get(getAllTradeOffers).post(createNewTradeOffer);

router.route("/offers/:id").get(getOneTradeOffer).delete(deleteOneTradeOffer);

router.route("/:user1/:card1/:user2/:card2").put(completeTrade);

module.exports = router;
