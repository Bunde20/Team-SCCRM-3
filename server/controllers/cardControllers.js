const Card = require("../models/Card");

// Find all Cards
function getAllCards(req, res) {
  Card.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Find one Card by id
function getOneCard(req, res) {
  Card.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Create one new Card
function createNewCard(req, res) {
  Card.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Update one Card by id
function updateCard(req, res) {
  Card.findOneAndUpdate(
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

// Delete one Card by id
function deleteCard(req, res) {
  Card.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  getAllCards,
  getOneCard,
  createNewCard,
  updateCard,
  deleteCard,
};
