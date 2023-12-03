const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    offeredCardId: { type: Schema.Types.ObjectId, ref: "Card" },
    seekingCardId: { type: Schema.Types.ObjectId, ref: "Card" },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleString("en-US"),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
    versionKey: false,
  }
);

const Offer = model("Offer", offerSchema);

module.exports = Offer;
