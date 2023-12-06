const router = require("express").Router();
const jwtAuth = require("../../utils/helper");
const {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  addUserCard,
  deleteUserCard,
} = require("../../controllers/userControllers");


router.route("/").get(jwtAuth, getAllUsers).post(createNewUser);

// NEVER EVER EVER UPDATE CARDS FROM THIS ENDPOINT.
// DOING SO WILL WIPE THE PLAYER'S ENTIRE COLLECTION.
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

// ALWAYS ALWAYS ALWAYS UPDATE CARDS HERE
router.route("/:userId/cards/:cardId").put(addUserCard).delete(deleteUserCard)

module.exports = router;
