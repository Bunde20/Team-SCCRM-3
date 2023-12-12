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
router.route("/:id").get(jwtAuth,getOneUser).put(jwtAuth,updateUser).delete(jwtAuth,deleteUser);

// ALWAYS ALWAYS ALWAYS UPDATE CARDS HERE
router.route("/:userId/cards/:cardId").put(jwtAuth,addUserCard).delete(jwtAuth,deleteUserCard)

module.exports = router;

// 6577a1c6d1b1ef90945d9f2a