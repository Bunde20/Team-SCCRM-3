const User = require("./models/User");
const Card = require("./models/Card");
const Offer = require("./models/Offer")
const db = require("./config/connection");

const userData = [
  {
    username: "AshKetchum",
    email: "veryBest151@yahoo.com",
    password: "missingno",
    coins: 100
  },
  {
    username: "BrockRock",
    email: "geoDude@gmail.com",
    password: "missingno",
    coins: 100
  },
  {
    username: "SeaMisty",
    email: "goldeengoldeen@hotmail.com",
    password: "missingno",
    coins: 100
  },
];

const cardData = [
  {
    dexNo: "001",
    name: "Varchar",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367839706759188/elrondhubbard_Molten_Lava_Salamander_in_Inferno_Pit_pokemon_cut_70ff1890-032d-47e4-8c54-462fa38bd5aa.png?ex=657d2a37&is=656ab537&hm=553aeebd6f6b57300fe4ea8e5475a1dd2d6a91376fac22a6236faa3a2af05dc6&",
    attack: "64",
    defense: "36",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "002",
    name: "Swinteger",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367652103934083/elrondhubbard_Bioluminescent_Deep_Sea_Leviathan_in_Abyssal_Dept_277a89b2-b14a-4060-b3c6-ff25319d545a.png?ex=657d2a0a&is=656ab50a&hm=b67b50b3a79a9cb76eaab830542be6dbe1c17f0dd6f4f5c1eb2cfa82fdd469c0&",
    attack: "51",
    defense: "49",
    coinCost: "15",
    type: "defender"
  },
  {
    dexNo: "003",
    name: "Leafarray",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1179031805052071987/elrondhubbard_Enchanted_Forest_Sprite_with_Luminescent_Wings__p_dd57d35e-f384-4686-987e-8052115aca70.png?ex=65784def&is=6565d8ef&hm=414d9ce42ba3b62fe9c7e26e79b96c83d6a19c2229d3585a751430520245c1da&",
    attack: "28",
    defense: "72",
    coinCost: "20",
    type: "trickster"
  },
  {
    dexNo: "004",
    name: "Galaxys",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367652586258472/elrondhubbard_Celestial_Aurora_Butterfly_in_Enchanted_Garden_po_e414a604-d4e2-42ad-80dd-f87cbaf772d6.png?ex=657d2a0a&is=656ab50a&hm=929d62dd329e5e8e24b4f93fedae9a49d545d794ad6c968fa77e699a41746054&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "defender"
  },
  {
    dexNo: "005",
    name: "Incognibro",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367653223813260/elrondhubbard_Steel_Golem_Knight_in_Ancient_Citadel_pokemon_cut_b60c5287-b62f-40f0-aeb7-e34aa5dce527.png?ex=657d2a0a&is=656ab50a&hm=2e61c53fe8fc7e2d182ebb3b92fe51dc8ff82db2a732bc55ff87675602cf4371&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "006",
    name: "Coalicon",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367653794217984/elrondhubbard_Demonic_Inferno_Imp_amidst_Hellfire_Flames_pokemo_b302d2b5-1275-4db9-b4e1-4720a55d2263.png?ex=657d2a0a&is=656ab50a&hm=b00be314aae9a09171447886f5f4ff861fba4a99150e359445fe3df588334d1e&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "007",
    name: "Mirefox",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367654448545802/elrondhubbard_Spectral_Ghost_Wolf_haunting_Abandoned_Graveyard__9c6c5b18-ff38-4ba3-a77b-6c664a1fc29b.png?ex=657d2a0a&is=656ab50a&hm=954d73778c62c624d2c93c92326e772f0741bcd1227deebb4227d64f928e0adf&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "008",
    name: "Sunbrave",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367655350325309/elrondhubbard_Mystical_Sun_Lion_basking_in_Solar_Radiance_pokem_d7e8cb46-35a5-4474-a02a-f623e6bf2e0f.png?ex=657d2a0b&is=656ab50b&hm=b82eaa4f9d740894e4256bb178010d735e0cfe5f97734fba0a442fbcf9a49949&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "defender"
  },
  {
    dexNo: "009",
    name: "Thermaltake",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367655937507379/elrondhubbard_Crystalized_Frost_Wyvern_in_Glacial_Glacier_pokem_51eced29-3d55-440d-9f73-5f8da6b2a1cb.png?ex=657d2a0b&is=656ab50b&hm=60bfcf0209fecd16a998a97fa19453c86151baf00c02b933d85866e909d2a4c3&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "010",
    name: "Robject",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367656486977586/elrondhubbard_Mechanical_Steam_Robot_in_Industrial_City_pokemon_c4668b34-c3ae-4fb6-8b08-c521ce132bd6.png?ex=657d2a0b&is=656ab50b&hm=f6fe960cfe3ec28a726f3d1f8f6044a41b0265d60a2fb026cbf825d2d4d058f5&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "011",
    name: "Thingtone",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367657069989989/elrondhubbard_Cursed_Swamp_Wraith_emerging_from_Murky_Waters_po_9d4155c9-1fdb-40bf-b38f-ffa938aa2aa7.png?ex=657d2a0b&is=656ab50b&hm=6fa040628a5595fbecf130b501be14a4e75fc2338d53b539df0407a9fc5f197c&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "defender"
  },
  {
    dexNo: "012",
    name: "Duolingo",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367657606840360/elrondhubbard_Elusive_Moonlight_Owl_in_Mystic_Woods_pokemon_hor_f61cdf34-0ba1-4962-b904-754fed8c1ff7.png?ex=657d2a0b&is=656ab50b&hm=b0b765a6255cf3d160a2c0ea89205360fc664ef6cf91d40f932ec8037e2d1273&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "defender"
  },
  {
    dexNo: "013",
    name: "Geekachu",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367838473617448/elrondhubbard_Electric_Storm_Elemental_crackling_with_Power_pok_291f0f45-a906-4309-ad31-4eea2f6a2f6c.png?ex=657d2a36&is=656ab536&hm=16156181c4bae0146261751923a463e9a4a134fe4ae750a742ddfbbb9161fde0&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "014",
    name: "Raycast",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367839060828281/elrondhubbard_Ancient_Stone_Sphinx_guarding_Desert_Oasis_pokemo_de8a8e07-849b-400f-a372-9323bda66b0c.png?ex=657d2a37&is=656ab537&hm=69eeef515832c43fd80f2fd580662661549aee6bca3eeaed2332bb409e2675b2&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "015",
    name: "Growzilla",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1178896087663259748/elrondhubbard_Fierce_Fire_Drake_in_Volcanic_Lair__pokemon_5e6db646-bb15-4376-994d-0b2a2001e077.png?ex=6577cf8a&is=65655a8a&hm=b9e0673939150873757be81b83d88d7457498a1a8762ad991f31f45e97695c66&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "016",
    name: "Unicode",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367840302342154/elrondhubbard_Luminous_Sky_Unicorn_with_Radiant_Horn_pokemon_cu_6ee8562f-5bd7-4511-b323-2c92f6da94d6.png?ex=657d2a37&is=656ab537&hm=7b1db0f83e1025d263f2e40a5e09eb4b5ef6810077df068f5bdbeebd416ea3ce&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "017",
    name: "Snowflape",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367840931495956/elrondhubbard_Frozen_Ice_Yeti_in_Arctic_Blizzard_pokemon_cute_940df5f6-655a-4b06-89fe-baed5f86531b.png?ex=657d2a37&is=656ab537&hm=be72f299f0bf4f2382968eb02dafc0d487a56085366bdbef9995513dd3990be9&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "defender"
  },
  {
    dexNo: "018",
    name: "Webdev",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367841485127740/elrondhubbard_Venomous_Shadow_Spider_in_Dark_Abyss_pokemon_cute_70f35d2b-0b6c-4964-93c7-9674a86a2d15.png?ex=657d2a37&is=656ab537&hm=140dded29a62e0b1187ff5d31849d9c3ff0df626c03c97e32bff57c95b5a7337&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "019",
    name: "Wyloop",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367841954906183/elrondhubbard_Celestial_Star_Phoenix_soaring_through_Cosmos_pok_d913cd2c-af7f-4afc-aa12-463e893e2c76.png?ex=657d2a37&is=656ab537&hm=c2da386c30f79942e8cc985f1d51102899ebb22a3b1a1dab732f2997963fe03d&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "020",
    name: "Cobol",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367842554675261/elrondhubbard_Ironclad_Earth_Golem_in_Crystal_Cavern_pokemon_f3ad5233-9362-4659-8272-62408dcf49ca.png?ex=657d2a37&is=656ab537&hm=1fa79e44a954556f13ba7aed86d806c90ae46fac40363f9b06410d01ab58405e&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "defender"
  },
  {
    dexNo: "021",
    name: "Overclox",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367843099942953/elrondhubbard_Thunderous_Storm_Griffin_on_Mountain_Peaks_pokemo_bbb0ae28-3fad-4e97-8af8-d5ef8cedca58.png?ex=657d2a37&is=656ab537&hm=9f4ead4ceb0ad30ff9afa5d48d9fd6f8d15ca463167a95ce4fb52c80414d75b9&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
  },
  {
    dexNo: "022",
    name: "Seasharp",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1178896246291828746/elrondhubbard_Mystic_Water_Serpent_among_Coral_Reefs__pokemon_c_e02911e1-5ae6-4021-b427-16011e19f11e.png?ex=6577cfaf&is=65655aaf&hm=30ea14e0522aa2a516b71fafe03467178ff1a55b47a45097998172c0f38fd776&",
    attack: "50",
    defense: "50",
    coinCost: "10",
    type: "attacker"
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