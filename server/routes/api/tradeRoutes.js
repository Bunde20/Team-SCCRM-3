const router = require("express").Router();
const jwtAuth = require("../../utils/helper");
const {
  completeTrade,
  getAllTradeOffers,
  createNewTradeOffer,
  getOneTradeOffer,
  deleteOneTradeOffer,
} = require("../../controllers/tradeControllers");

router.route("/offers").get(jwtAuth,getAllTradeOffers).post(jwtAuth,createNewTradeOffer);

router.route("/offers/:id").get(jwtAuth,getOneTradeOffer).delete(deleteOneTradeOffer);

router.route("/:user1/:card1/:user2/:card2").put(jwtAuth,completeTrade);

module.exports = router;
