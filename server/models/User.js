const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, "email address invalid"],
    },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

userSchema.virtual("cardCount").get(function () {
  return this.cards.length;
});

const User = model("User", userSchema);

module.exports = User;
