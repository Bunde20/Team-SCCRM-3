require('dotenv').config()
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_KEY
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
      trim: true,
      match: [/.+@.+\..+/, "email address invalid"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
    tokens: [{ token: {type: String, required: true} }]

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.passwordCheck = async function (password) {
  return await bcrypt.compare(password, this.password);
}
// return user's card total
userSchema.virtual("cardCount").get(function () {
  return this.cards.length;
});

const User = model("User", userSchema);

module.exports = User;
