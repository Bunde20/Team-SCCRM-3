const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    dexNo: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    cardType: {
      type: String,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    defense: {
      type: Number,
      required: true,
    },
    coinCost: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

const Card = model("Card", cardSchema);

module.exports = Card;
