const router = require("express").Router();

const {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userControllers')

// Find all users, or create a new user
router.route("/").get(getAllUsers).post(createNewUser);

// Find one user, update that user, or delete that user
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser)

module.exports = router;