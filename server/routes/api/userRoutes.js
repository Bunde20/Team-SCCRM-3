const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  addUserCard,
  deleteUserCard,
} = require("../../controllers/userControllers");


router.route("/").get(getAllUsers).post(createNewUser);

// NEVER EVER EVER UPDATE CARDS FROM THIS ENDPOINT
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

// ALWAYS ALWAYS ALWAYS UPDATE CARDS HERE
router.route("/:userId/cards/:cardId").put(addUserCard).delete(deleteUserCard)

module.exports = router;
