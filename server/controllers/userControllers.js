const User = require("../models/User");

function getAllUsers(req, res) {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function getOneUser(req, res) {
  User.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function createNewUser(req, res) {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function updateUser(req, res) {
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
}

function deleteUser(req, res) {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
