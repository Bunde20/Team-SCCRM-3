const router = require("express").Router();
const jwtAuth = require("../../utils/helper");
const {
  getAllCards,
  createNewCard,
  getOneCard,
  updateCard,
  deleteCard
} = require("../../controllers/cardControllers");


router.route("/").get(jwtAuth,getAllCards).post(createNewCard);

router.route("/:id").get(jwtAuth,getOneCard).put(jwtAuth,updateCard).delete(jwtAuth,deleteCard);

module.exports = router;