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
    password: "missingno",
  },
];

const cardData = [
  {
    dexNo: "001",
    name: "Swinteger",
    description: 'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1178895917651341343/elrondhubbard_Mystic_Water_Serpent_among_Coral_Reefs__pokemon_c_e02911e1-5ae6-4021-b427-16011e19f11e.png?ex=6577cf61&is=65655a61&hm=f78304b4b5c838a7f5c30e44334ecb3a9a15caf9fece45a1f3e05d800e12a4f0&",
    attack: "64",
    defense: "36",
  },
  {
    dexNo: "002",
    name: "Varchar",
    description: 'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1178893173418889296/elrondhubbard_Fierce_Fire_Drake_in_Volcanic_Lair__pokemon_5e6db646-bb15-4376-994d-0b2a2001e077.png?ex=6577ccd3&is=656557d3&hm=c7b34a5fe119b5dda1e5e81ff834bc5ca440595814574639298b1ab614d98902&",
    attack: "51",
    defense: "49",
  },
  {
    dexNo: "003",
    name: "Leafarray",
    description: 'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1179031805052071987/elrondhubbard_Enchanted_Forest_Sprite_with_Luminescent_Wings__p_dd57d35e-f384-4686-987e-8052115aca70.png?ex=65784def&is=6565d8ef&hm=414d9ce42ba3b62fe9c7e26e79b96c83d6a19c2229d3585a751430520245c1da&",
    attack: "28",
    defense: "72",
  },
];

db.once("open", (req, res) => {
  Promise.all([Card.deleteMany({}), User.deleteMany({})]).then(() => {
    Promise.all([Card.insertMany(cardData), User.insertMany(userData)])
      .then((data) => {
        console.log(data, "SEED SUCCESS!");
        process.exit();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
