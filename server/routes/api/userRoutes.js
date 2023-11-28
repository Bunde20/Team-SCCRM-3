const router = require("express").Router();
const User = require("../../models/User");

// Find all users
router.get("/", (req, res) => {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Find one user by id
router.get("/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Create one new user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Update one user by id
router.put("/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete one user by id and delete user's thoughts
router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;