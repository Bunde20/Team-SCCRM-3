const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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

// return user's card total
userSchema.virtual("cardCount").get(function () {
  return this.cards.length;
});

const User = model("User", userSchema);

module.exports = User;
