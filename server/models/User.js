require('dotenv').config()
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

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
    // add a token field
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

userSchema.methods.generateAuthToken = async function () {
  // secret key currently just '1' 
  const token = jwt.sign({ _id: this._id },secretKey,{
    expiresIn: '24h',
  })

  this.tokens = token
  await this.save()

  return token
}

// return user's card total
userSchema.virtual("cardCount").get(function () {
  return this.cards.length;
});

const User = model("User", userSchema);

module.exports = User;
