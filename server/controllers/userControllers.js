const User = require("../models/User");

// Find all users
function getAllUsers(req, res) {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Find one user by id
function getOneUser(req, res) {
  User.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Create one new user
function createNewUser(req, res) {
  User.create(req.body)
    .then((data) =>{
      return data.generateAuthToken().then((token) => {
        res.status(201).json({ user: data, token})
      })

    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Update one user by id
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

// Add one card to collection by id
function addUserCard(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { cards: req.params.cardId } },
    { new: true }
  )
    .then((data) => res.json(data))
    .then(() => console.log("CARD ADDED"))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Delete one card from collection by id
function deleteUserCard(req, res) {
  User.findOne({ _id: req.params.userId })
    .then((user) => {
        // only delete first instance of cardId
        const cardIndex = user.cards.indexOf(req.params.cardId)
        user.cards.splice(cardIndex, 1)
        return user.save()
    })
    .then((data) => res.json(data))
    .then(() => console.log("CARD DELETED"))
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
  addUserCard,
  deleteUserCard,
};
