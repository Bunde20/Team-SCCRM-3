const User = require("./models/User");
const Card = require("./models/Card");
const Offer = require("./models/Offer")
const db = require("./config/connection");

const userData = [
  {
    username: "AshKetchum",
    email: "veryBest151@yahoo.com",
    password: "missingno",
    coins: 3000
  },
  {
    username: "BrockRock",
    email: "geoDude@gmail.com",
    password: "missingno",
    coins: 3000
  },
  {
    username: "SeaMisty",
    email: "goldeengoldeen@hotmail.com",
    password: "missingno",
    coins: 3000
  },
];

const cardData = [
  {
    dexNo: "001",
    name: "Varchar",
    image: "https://ik.imagekit.io/en4cpe64r/varchar.png?updatedAt=1709246960922",
    attack: "91",
    health: "77",
    coinCost: "20",
    type: "attacker"
  },
  {
    dexNo: "002",
    name: "Swinteger",
    image: "https://ik.imagekit.io/en4cpe64r/swinteger.png?updatedAt=1709247695543",
    attack: "71",
    health: "94",
    coinCost: "20",
    type: "defender"
  },
  {
    dexNo: "003",
    name: "Leafarray",
    image: "https://ik.imagekit.io/en4cpe64r/leafarray.png?updatedAt=1709148513840",
    attack: "87",
    health: "82",
    coinCost: "20",
    type: "trickster"
  },
  {
    dexNo: "004",
    name: "Galaxys",
    image: "https://ik.imagekit.io/en4cpe64r/galaxys.png?updatedAt=1709149270058",
    attack: "74",
    health: "92",
    coinCost: "16",
    type: "defender"
  },
  {
    dexNo: "005",
    name: "Incognibro",
    image: "https://ik.imagekit.io/en4cpe64r/incognibro.png?updatedAt=1709149270212",
    attack: "85",
    health: "85",
    coinCost: "13",
    type: "trickster"
  },
  {
    dexNo: "006",
    name: "Coalicon",
    image: "https://ik.imagekit.io/en4cpe64r/coalicon.png?updatedAt=1709149270210",
    attack: "83",
    health: "88",
    coinCost: "11",
    type: "trickster"
  },
  {
    dexNo: "007",
    name: "Mirefox",
    image: "https://ik.imagekit.io/en4cpe64r/mirefox.png?updatedAt=1709149270075",
    attack: "98",
    health: "76",
    coinCost: "14",
    type: "attacker"
  },
  {
    dexNo: "008",
    name: "Sunbrave",
    image: "https://ik.imagekit.io/en4cpe64r/sunbrave.png?updatedAt=1709149270053",
    attack: "71",
    health: "99",
    coinCost: "19",
    type: "defender"
  },
  {
    dexNo: "009",
    name: "Thermaltake",
    image: "https://ik.imagekit.io/en4cpe64r/thermaltake.png?updatedAt=1709149269687",
    attack: "99",
    health: "70",
    coinCost: "25",
    type: "attacker"
  },
  {
    dexNo: "010",
    name: "Robject",
    image: "https://ik.imagekit.io/en4cpe64r/robject.png?updatedAt=1709149270273",
    attack: "91",
    health: "79",
    coinCost: "22",
    type: "attacker"
  },
  {
    dexNo: "011",
    name: "Thingtone",
    image: "https://ik.imagekit.io/en4cpe64r/thingtone.png?updatedAt=1709149270083",
    attack: "75",
    health: "97",
    coinCost: "17",
    type: "defender"
  },
  {
    dexNo: "012",
    name: "Duolingo",
    image: "https://ik.imagekit.io/en4cpe64r/duolingo.png?updatedAt=1709149270143",
    attack: "70",
    health: "96",
    coinCost: "12",
    type: "defender"
  },
  {
    dexNo: "013",
    name: "Geekachu",
    image: "https://ik.imagekit.io/en4cpe64r/geekachu.png?updatedAt=1709149771091",
    attack: "96",
    health: "73",
    coinCost: "18",
    type: "attacker"
  },
  {
    dexNo: "014",
    name: "Raycast",
    image: "https://ik.imagekit.io/en4cpe64r/raycast.png?updatedAt=1709149771077",
    attack: "88",
    health: "86",
    coinCost: "11",
    type: "trickster"
  },
  {
    dexNo: "015",
    name: "Growzilla",
    image: "https://ik.imagekit.io/en4cpe64r/growzilla.png?updatedAt=1709246989280",
    attack: "98",
    health: "78",
    coinCost: "21",
    type: "attacker"
  },
  {
    dexNo: "016",
    name: "Unicode",
    image: "https://ik.imagekit.io/en4cpe64r/unicode.png?updatedAt=1709149770870",
    attack: "81",
    health: "89",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "017",
    name: "Snowflape",
    image: "https://ik.imagekit.io/en4cpe64r/snowflape.png?updatedAt=1709149770817",
    attack: "79",
    health: "92",
    coinCost: "15",
    type: "defender"
  },
  {
    dexNo: "018",
    name: "Webdev",
    image: "https://ik.imagekit.io/en4cpe64r/webdev.png?updatedAt=1709149770790",
    attack: "94",
    health: "76",
    coinCost: "13",
    type: "attacker"
  },
  {
    dexNo: "019",
    name: "Wyloop",
    image: "https://ik.imagekit.io/en4cpe64r/wyloop.png?updatedAt=1709149770804",
    attack: "82",
    health: "85",
    coinCost: "16",
    type: "trickster"
  },
  {
    dexNo: "020",
    name: "Cobol",
    image: "https://ik.imagekit.io/en4cpe64r/cobol.png?updatedAt=1709149770685",
    attack: "72",
    health: "99",
    coinCost: "23",
    type: "defender"
  },
  {
    dexNo: "021",
    name: "Overclox",
    image: "https://ik.imagekit.io/en4cpe64r/overclox.png?updatedAt=1709149770814",
    attack: "98",
    health: "76",
    coinCost: "22",
    type: "attacker"
  },
  {
    dexNo: "022",
    name: "Seasharp",
    image: "https://ik.imagekit.io/en4cpe64r/seasharp.png?updatedAt=1709247730000",
    attack: "91",
    health: "79",
    coinCost: "17",
    type: "attacker"
  },
  {
    dexNo: "023",
    name: "Firewail",
    image: "https://ik.imagekit.io/en4cpe64r/firewail.png?updatedAt=1709247109655",
    attack: "77",
    health: "94",
    coinCost: "19",
    type: "defender"
  },
  {
    dexNo: "024",
    name: "Blython",
    image: "https://ik.imagekit.io/en4cpe64r/blython.png?updatedAt=1709247109377",
    attack: "96",
    health: "77",
    coinCost: "18",
    type: "attacker"
  },
  {
    dexNo: "025",
    name: "Bootscrap",
    image: "https://ik.imagekit.io/en4cpe64r/bootscrap.png?updatedAt=1709247109253",
    attack: "81",
    health: "89",
    coinCost: "12",
    type: "trickster"
  },
  {
    dexNo: "026",
    name: "Cyberian",
    image: "https://ik.imagekit.io/en4cpe64r/cyberian.png?updatedAt=1709247109202",
    attack: "76",
    health: "95",
    coinCost: "20",
    type: "defender"
  },
  {
    dexNo: "027",
    name: "Rhyspace",
    image: "https://ik.imagekit.io/en4cpe64r/rhyspace.png?updatedAt=1709247109658",
    attack: "90",
    health: "78",
    coinCost: "13",
    type: "attacker"
  },
  {
    dexNo: "028",
    name: "Tweeter",
    image: "https://ik.imagekit.io/en4cpe64r/tweeter.png?updatedAt=1709247109175",
    attack: "82",
    health: "88",
    coinCost: "16",
    type: "trickster"
  },
  {
    dexNo: "029",
    name: "Terrabite",
    image: "https://ik.imagekit.io/en4cpe64r/terrabite.png?updatedAt=1709149770807",
    attack: "124",
    health: "86",
    coinCost: "100",
    type: "attacker"
  },
  {
    dexNo: "030",
    name: "Assemblus",
    image: "https://ik.imagekit.io/en4cpe64r/assemblus.png?updatedAt=1709149770643",
    attack: "97",
    health: "98",
    coinCost: "100",
    type: "trickster"
  },
  {
    dexNo: "031",
    name: "Serviroot",
    image: "https://ik.imagekit.io/en4cpe64r/serviroot.png?updatedAt=1709149770823",
    attack: "89",
    health: "134",
    coinCost: "100",
    type: "defender"
  },
  {
    dexNo: "032",
    name: "Gitfetch",
    image: "https://ik.imagekit.io/en4cpe64r/gitfetch.png?updatedAt=1709149770616",
    attack: "5",
    health: "5",
    coinCost: "999",
    type: "friend"
  }
];

async function seedCardData() {
  try {
    await Card.deleteMany({});
    const cards = await Card.insertMany(cardData);
    console.log(cards.length + " cards seeded successfully");
  } catch (error) {
    console.error("Error seeding card data:", error);
  }
}

async function seedUserData() {
  try {
    await User.deleteMany({});
    await User.insertMany(userData);
    console.log(userData.length + " users seeded successfully");
  } catch (error) {
    console.error("Error seeding user data:", error);
  }
}

async function updateUsersWithRandomCards() {
  try {
    const users = await User.find();
    const cards = await Card.find();

    await Promise.all(users.map(async (user) => {
      const randomCards = getRandomSubset(cards, 5); // Adjust the number of cards as needed
      user.cards = randomCards.map(card => card._id);
      await user.save();
    }));

    console.log("Users updated with random cards successfully");
  } catch (error) {
    console.error("Error updating users with random cards:", error);
  }
}

async function createTradeOffers() {
  try {
    await Offer.deleteMany({})
    const users = await User.find();

    await Promise.all(users.map(async (user) => {
      const userCardIds = user.cards.map(cardId => cardId.toString());

      if (userCardIds.length >= 2) {
        // Select two random cards from the user's collection
        const [offeredCardId, seekingCardId] = getRandomSubset(userCardIds, 2);

        // Create a trade offer for the selected cards
        await Offer.create({
          userId: user._id,
          offeredCardId,
          seekingCardId,
        });
      }
    }));

    console.log("Trade offers created successfully");
  } catch (error) {
    console.error("Error creating trade offers:", error);
  }
}

function getRandomSubset(array, size) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

async function seed() {
  await db.once("open", async () => {
    await seedCardData();
    await seedUserData();
    await updateUsersWithRandomCards();
    await createTradeOffers();
    process.exit();
  });
}

seed();