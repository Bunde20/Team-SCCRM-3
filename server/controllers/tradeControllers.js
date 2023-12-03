const User = require("../models/User");
const Card = require("../models/Card");

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

module.exports = { completeTrade };
