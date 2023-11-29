const router = require("express").Router();

const getUserPasswordCheck = require("../../controllers/loginController");

router.post("/",getUserPasswordCheck);

module.exports = router;