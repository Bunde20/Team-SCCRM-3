const User = require("../models/User");
const Offer = require("../models/Offer");

// Get all trade offers
function getAllTradeOffers(req, res) {
  Offer.find({})
    // .populate("users")
    // .populate("cards")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Get one trade offer by id
function getOneTradeOffer(req, res) {
  Offer.find({ _id: req.params.id })
    .populate("users")
    .populate("cards")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
// Create new trade offer
function createNewTradeOffer(req, res) {
  Offer.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Delete one trade offer by id
function deleteOneTradeOffer(req, res) {
  Offer.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

// Complete trade between two users
function completeTrade(req, res) {
  Promise.all([
    User.findOneAndUpdate(
      { _id: req.params.user1 },
      { $push: { cards: req.params.card2 } },
      { new: true }
    ).then((user) => {
      // only delete first instance of card1
      const cardIndex = user.cards.indexOf(req.params.card1);
      user.cards.splice(cardIndex, 1);
      return user.save();
    }),
    User.findOneAndUpdate(
      { _id: req.params.user2 },
      { $push: { cards: req.params.card1 } },
      { new: true }
    ).then((user) => {
      // only delete first instance of card2
      const cardIndex = user.cards.indexOf(req.params.card2);
      user.cards.splice(cardIndex, 1);
      return user.save();
    }),
  ])
    .then((data) => res.json(data))
    .then(() => console.log("TRADE COMPLETED"))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  completeTrade,
  getAllTradeOffers,
  getOneTradeOffer,
  createNewTradeOffer,
  deleteOneTradeOffer,
};
