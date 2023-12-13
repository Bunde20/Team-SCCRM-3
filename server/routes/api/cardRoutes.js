const router = require("express").Router();
const jwtAuth = require("../../utils/helper");
const {
  getAllCards,
  createNewCard,
  getOneCard,
  updateCard,
  deleteCard
} = require("../../controllers/cardControllers");


router.route("/").get(getAllCards).post(createNewCard);

router.route("/:id").get(getOneCard).put(updateCard).delete(deleteCard);

module.exports = router;