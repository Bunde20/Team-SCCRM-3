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
    coins: {
      type: Number,
      default: 100,
      required: true,
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
// hash seeded user passwords
userSchema.pre("insertMany", async function (next, docs) {
  if (Array.isArray(docs) && docs.length) {
      const hashedUsers = docs.map(async (user) => {
          return await new Promise((resolve, reject) => {
              bcrypt.genSalt(10).then((salt) => {
                  let password = user.password.toString()
                  bcrypt.hash(password, salt).then(hash => {
                      user.password = hash
                      resolve(user)
                  }).catch(e => {
                      reject(e)
                  })
              }).catch((e) => {
                  reject(e)
              })
          })
      })
      docs = await Promise.all(hashedUsers)
      next()
  } else {
      return next(new Error("User list should not be empty")) // lookup early return pattern
  }
})


userSchema.methods.passwordCheck = async function (password) {
  return await bcrypt.compareSync(password, this.password);
}
// return user's card total
userSchema.virtual("cardCount").get(function () {
  return this.cards.length;
});

const User = model("User", userSchema);

module.exports = User;
