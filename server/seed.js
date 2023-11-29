const User = require("./models/User");
const Card = require("./models/Card");
const db = require("./config/connection");

const userData = [
  {
    username: "AshKetchum",
    email: "veryBest151@yahoo.com",
    password: "missingno",
  },
  {
    username: "BrockRock",
    email: "geoDude@gmail.com",
    password: "missingno",
  },
  {
    username: "SeaMisty",
    email: "goldeengoldeen@hotmail.com",
    password: "missingno"
  },
];

const cardData = []

db.once("open", (req, res) => {
  User.deleteMany({}).then(() => {
    User.insertMany(userData)
      .then((data) => {
        console.log("USERS SEEDED");
        console.log(data);
        process.exit()
      })
      .catch((err) => {
        console.log(err);
      });
  });
});