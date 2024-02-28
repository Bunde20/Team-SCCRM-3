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
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367839706759188/elrondhubbard_Molten_Lava_Salamander_in_Inferno_Pit_pokemon_cut_70ff1890-032d-47e4-8c54-462fa38bd5aa.png?ex=657d2a37&is=656ab537&hm=553aeebd6f6b57300fe4ea8e5475a1dd2d6a91376fac22a6236faa3a2af05dc6&",
    image: "https://ik.imagekit.io/en4cpe64r/varchar.png?updatedAt=1709148401085",
    attack: "91",
    health: "77",
    coinCost: "20",
    type: "attacker"
  },
  {
    dexNo: "002",
    name: "Swinteger",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367652103934083/elrondhubbard_Bioluminescent_Deep_Sea_Leviathan_in_Abyssal_Dept_277a89b2-b14a-4060-b3c6-ff25319d545a.png?ex=657d2a0a&is=656ab50a&hm=b67b50b3a79a9cb76eaab830542be6dbe1c17f0dd6f4f5c1eb2cfa82fdd469c0&",
    image: "https://ik.imagekit.io/en4cpe64r/swinteger.png?updatedAt=1709148453007",
    attack: "71",
    health: "94",
    coinCost: "20",
    type: "defender"
  },
  {
    dexNo: "003",
    name: "Leafarray",
    // image: "https://cdn.discordapp.com/attachments/1062551659168944249/1179031805052071987/elrondhubbard_Enchanted_Forest_Sprite_with_Luminescent_Wings__p_dd57d35e-f384-4686-987e-8052115aca70.png?ex=65784def&is=6565d8ef&hm=414d9ce42ba3b62fe9c7e26e79b96c83d6a19c2229d3585a751430520245c1da&",
    image: "https://ik.imagekit.io/en4cpe64r/leafarray.png?updatedAt=1709148513840",
    attack: "87",
    health: "82",
    coinCost: "20",
    type: "trickster"
  },
  {
    dexNo: "004",
    name: "Galaxys",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367652586258472/elrondhubbard_Celestial_Aurora_Butterfly_in_Enchanted_Garden_po_e414a604-d4e2-42ad-80dd-f87cbaf772d6.png?ex=657d2a0a&is=656ab50a&hm=929d62dd329e5e8e24b4f93fedae9a49d545d794ad6c968fa77e699a41746054&",
    image: "https://ik.imagekit.io/en4cpe64r/galaxys.png?updatedAt=1709149270058",
    attack: "74",
    health: "92",
    coinCost: "16",
    type: "defender"
  },
  {
    dexNo: "005",
    name: "Incognibro",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367653223813260/elrondhubbard_Steel_Golem_Knight_in_Ancient_Citadel_pokemon_cut_b60c5287-b62f-40f0-aeb7-e34aa5dce527.png?ex=657d2a0a&is=656ab50a&hm=2e61c53fe8fc7e2d182ebb3b92fe51dc8ff82db2a732bc55ff87675602cf4371&",
    image: "https://ik.imagekit.io/en4cpe64r/incognibro.png?updatedAt=1709149270212",
    attack: "85",
    health: "85",
    coinCost: "13",
    type: "trickster"
  },
  {
    dexNo: "006",
    name: "Coalicon",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367653794217984/elrondhubbard_Demonic_Inferno_Imp_amidst_Hellfire_Flames_pokemo_b302d2b5-1275-4db9-b4e1-4720a55d2263.png?ex=657d2a0a&is=656ab50a&hm=b00be314aae9a09171447886f5f4ff861fba4a99150e359445fe3df588334d1e&",
    image: "https://ik.imagekit.io/en4cpe64r/coalicon.png?updatedAt=1709149270210",
    attack: "83",
    health: "88",
    coinCost: "11",
    type: "trickster"
  },
  {
    dexNo: "007",
    name: "Mirefox",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367654448545802/elrondhubbard_Spectral_Ghost_Wolf_haunting_Abandoned_Graveyard__9c6c5b18-ff38-4ba3-a77b-6c664a1fc29b.png?ex=657d2a0a&is=656ab50a&hm=954d73778c62c624d2c93c92326e772f0741bcd1227deebb4227d64f928e0adf&",
    image: "https://ik.imagekit.io/en4cpe64r/mirefox.png?updatedAt=1709149270075",
    attack: "98",
    health: "76",
    coinCost: "14",
    type: "attacker"
  },
  {
    dexNo: "008",
    name: "Sunbrave",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367655350325309/elrondhubbard_Mystical_Sun_Lion_basking_in_Solar_Radiance_pokem_d7e8cb46-35a5-4474-a02a-f623e6bf2e0f.png?ex=657d2a0b&is=656ab50b&hm=b82eaa4f9d740894e4256bb178010d735e0cfe5f97734fba0a442fbcf9a49949&",
    image: "https://ik.imagekit.io/en4cpe64r/sunbrave.png?updatedAt=1709149270053",
    attack: "71",
    health: "99",
    coinCost: "19",
    type: "defender"
  },
  {
    dexNo: "009",
    name: "Thermaltake",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367655937507379/elrondhubbard_Crystalized_Frost_Wyvern_in_Glacial_Glacier_pokem_51eced29-3d55-440d-9f73-5f8da6b2a1cb.png?ex=657d2a0b&is=656ab50b&hm=60bfcf0209fecd16a998a97fa19453c86151baf00c02b933d85866e909d2a4c3&",
    image: "https://ik.imagekit.io/en4cpe64r/thermaltake.png?updatedAt=1709149269687",
    attack: "99",
    health: "70",
    coinCost: "25",
    type: "attacker"
  },
  {
    dexNo: "010",
    name: "Robject",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367656486977586/elrondhubbard_Mechanical_Steam_Robot_in_Industrial_City_pokemon_c4668b34-c3ae-4fb6-8b08-c521ce132bd6.png?ex=657d2a0b&is=656ab50b&hm=f6fe960cfe3ec28a726f3d1f8f6044a41b0265d60a2fb026cbf825d2d4d058f5&",
    image: "https://ik.imagekit.io/en4cpe64r/robject.png?updatedAt=1709149270273",
    attack: "91",
    health: "79",
    coinCost: "22",
    type: "attacker"
  },
  {
    dexNo: "011",
    name: "Thingtone",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367657069989989/elrondhubbard_Cursed_Swamp_Wraith_emerging_from_Murky_Waters_po_9d4155c9-1fdb-40bf-b38f-ffa938aa2aa7.png?ex=657d2a0b&is=656ab50b&hm=6fa040628a5595fbecf130b501be14a4e75fc2338d53b539df0407a9fc5f197c&",
    image: "https://ik.imagekit.io/en4cpe64r/thingtone.png?updatedAt=1709149270083",
    attack: "75",
    health: "97",
    coinCost: "17",
    type: "defender"
  },
  {
    dexNo: "012",
    name: "Duolingo",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367657606840360/elrondhubbard_Elusive_Moonlight_Owl_in_Mystic_Woods_pokemon_hor_f61cdf34-0ba1-4962-b904-754fed8c1ff7.png?ex=657d2a0b&is=656ab50b&hm=b0b765a6255cf3d160a2c0ea89205360fc664ef6cf91d40f932ec8037e2d1273&",
    image: "https://ik.imagekit.io/en4cpe64r/duolingo.png?updatedAt=1709149270143",
    attack: "70",
    health: "96",
    coinCost: "12",
    type: "defender"
  },
  {
    dexNo: "013",
    name: "Geekachu",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367838473617448/elrondhubbard_Electric_Storm_Elemental_crackling_with_Power_pok_291f0f45-a906-4309-ad31-4eea2f6a2f6c.png?ex=657d2a36&is=656ab536&hm=16156181c4bae0146261751923a463e9a4a134fe4ae750a742ddfbbb9161fde0&",
    image: "https://ik.imagekit.io/en4cpe64r/geekachu.png?updatedAt=1709149771091",
    attack: "96",
    health: "73",
    coinCost: "18",
    type: "attacker"
  },
  {
    dexNo: "014",
    name: "Raycast",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367839060828281/elrondhubbard_Ancient_Stone_Sphinx_guarding_Desert_Oasis_pokemo_de8a8e07-849b-400f-a372-9323bda66b0c.png?ex=657d2a37&is=656ab537&hm=69eeef515832c43fd80f2fd580662661549aee6bca3eeaed2332bb409e2675b2&",
    image: "https://ik.imagekit.io/en4cpe64r/raycast.png?updatedAt=1709149771077",
    attack: "88",
    health: "86",
    coinCost: "11",
    type: "trickster"
  },
  {
    dexNo: "015",
    name: "Growzilla",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1178896087663259748/elrondhubbard_Fierce_Fire_Drake_in_Volcanic_Lair__pokemon_5e6db646-bb15-4376-994d-0b2a2001e077.png?ex=6577cf8a&is=65655a8a&hm=b9e0673939150873757be81b83d88d7457498a1a8762ad991f31f45e97695c66&",
    image: "https://ik.imagekit.io/en4cpe64r/growzilla.png?updatedAt=1709149771133",
    attack: "98",
    health: "78",
    coinCost: "21",
    type: "attacker"
  },
  {
    dexNo: "016",
    name: "Unicode",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367840302342154/elrondhubbard_Luminous_Sky_Unicorn_with_Radiant_Horn_pokemon_cu_6ee8562f-5bd7-4511-b323-2c92f6da94d6.png?ex=657d2a37&is=656ab537&hm=7b1db0f83e1025d263f2e40a5e09eb4b5ef6810077df068f5bdbeebd416ea3ce&",
    image: "https://ik.imagekit.io/en4cpe64r/unicode.png?updatedAt=1709149770870",
    attack: "81",
    health: "89",
    coinCost: "10",
    type: "trickster"
  },
  {
    dexNo: "017",
    name: "Snowflape",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367840931495956/elrondhubbard_Frozen_Ice_Yeti_in_Arctic_Blizzard_pokemon_cute_940df5f6-655a-4b06-89fe-baed5f86531b.png?ex=657d2a37&is=656ab537&hm=be72f299f0bf4f2382968eb02dafc0d487a56085366bdbef9995513dd3990be9&",
    image: "https://ik.imagekit.io/en4cpe64r/snowflape.png?updatedAt=1709149770817",
    attack: "79",
    health: "92",
    coinCost: "15",
    type: "defender"
  },
  {
    dexNo: "018",
    name: "Webdev",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367841485127740/elrondhubbard_Venomous_Shadow_Spider_in_Dark_Abyss_pokemon_cute_70f35d2b-0b6c-4964-93c7-9674a86a2d15.png?ex=657d2a37&is=656ab537&hm=140dded29a62e0b1187ff5d31849d9c3ff0df626c03c97e32bff57c95b5a7337&",
    image: "https://ik.imagekit.io/en4cpe64r/webdev.png?updatedAt=1709149770790",
    attack: "94",
    health: "76",
    coinCost: "13",
    type: "attacker"
  },
  {
    dexNo: "019",
    name: "Wyloop",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367841954906183/elrondhubbard_Celestial_Star_Phoenix_soaring_through_Cosmos_pok_d913cd2c-af7f-4afc-aa12-463e893e2c76.png?ex=657d2a37&is=656ab537&hm=c2da386c30f79942e8cc985f1d51102899ebb22a3b1a1dab732f2997963fe03d&",
    image: "https://ik.imagekit.io/en4cpe64r/wyloop.png?updatedAt=1709149770804",
    attack: "82",
    health: "85",
    coinCost: "16",
    type: "trickster"
  },
  {
    dexNo: "020",
    name: "Cobol",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367842554675261/elrondhubbard_Ironclad_Earth_Golem_in_Crystal_Cavern_pokemon_f3ad5233-9362-4659-8272-62408dcf49ca.png?ex=657d2a37&is=656ab537&hm=1fa79e44a954556f13ba7aed86d806c90ae46fac40363f9b06410d01ab58405e&",
    image: "https://ik.imagekit.io/en4cpe64r/cobol.png?updatedAt=1709149770685",
    attack: "72",
    health: "99",
    coinCost: "23",
    type: "defender"
  },
  {
    dexNo: "021",
    name: "Overclox",
    // image: "https://cdn.discordapp.com/attachments/1138284399704682537/1180367843099942953/elrondhubbard_Thunderous_Storm_Griffin_on_Mountain_Peaks_pokemo_bbb0ae28-3fad-4e97-8af8-d5ef8cedca58.png?ex=657d2a37&is=656ab537&hm=9f4ead4ceb0ad30ff9afa5d48d9fd6f8d15ca463167a95ce4fb52c80414d75b9&",
    image: "https://ik.imagekit.io/en4cpe64r/overclox.png?updatedAt=1709149770814",
    attack: "98",
    health: "76",
    coinCost: "22",
    type: "attacker"
  },
  {
    dexNo: "022",
    name: "Seasharp",
    image: "https://cdn.discordapp.com/attachments/1138284399704682537/1178896246291828746/elrondhubbard_Mystic_Water_Serpent_among_Coral_Reefs__pokemon_c_e02911e1-5ae6-4021-b427-16011e19f11e.png?ex=6577cfaf&is=65655aaf&hm=30ea14e0522aa2a516b71fafe03467178ff1a55b47a45097998172c0f38fd776&",
    attack: "91",
    health: "79",
    coinCost: "17",
    type: "attacker"
  },
  {
    dexNo: "023",
    name: "Firewail",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1182510737743151115/elrondhubbard_humongous_flaming_bullfrog_sticking_out_its_tongu_572ebba6-47a2-4560-8373-333f66da4299.png?ex=6584f5f1&is=657280f1&hm=823a334e561818d739a9429907b2e6e110fa43a54f89701224247c08ee3900c0&",
    attack: "77",
    health: "94",
    coinCost: "19",
    type: "defender"
  },
  {
    dexNo: "024",
    name: "Blython",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1182511636184043601/elrondhubbard_Shadowwhisper_Serpent_pokemon_cute_33a015b1-c6cd-49d1-a5ac-4a24e22ad127.png?ex=6584f6c8&is=657281c8&hm=87d2fc66528712c427bd9c21b7d7ff9bd66ecf42a958e823b4965dc8b372e0ce&",
    attack: "96",
    health: "77",
    coinCost: "18",
    type: "attacker"
  },
  {
    dexNo: "025",
    name: "Bootscrap",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1183029835287761006/elrondhubbard_Electrified_Hermit_Crab_Living_in_Dusty_Boot_poke_5ebc696e-cba6-459b-b036-00a8567524f3.png?ex=6586d964&is=65746464&hm=a4f611523915a0e908fbc83e47cae57946e0058770057fc829fe71cef122bdbf&",
    attack: "81",
    health: "89",
    coinCost: "12",
    type: "trickster"
  },
  {
    dexNo: "026",
    name: "Cyberian",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184236794582147223/elrondhubbard_ferocious_siberian_tiger_lounging_in_kingly_suspi_da9bab79-e231-40a1-a8a5-9b19561d8ac9.png?ex=658b3d75&is=6578c875&hm=2fc3dec62555dca1b3caad6aadd9ae3c5daa0510a8e657aec4cef6b70dc60ebe&",
    attack: "76",
    health: "95",
    coinCost: "20",
    type: "defender"
  },
  {
    dexNo: "027",
    name: "Rhyspace",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184234993082450021/elrondhubbard_glowing_cosmic_rhinocerous_charging_through_the_s_41a3ab48-d34f-4f1b-a44c-5a201839b9bc.png?ex=658b3bc8&is=6578c6c8&hm=b8a38d838c29db41f594b52432ff501eae8ef9f4bcc2d422cd9e583b27c05178&",
    attack: "90",
    health: "78",
    coinCost: "13",
    type: "attacker"
  },
  {
    dexNo: "028",
    name: "Tweeter",
    image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184233907810484275/elrondhubbard_glistening_icy_crane_bird_coveting_the_moon_pokem_1ffc6df9-5bfe-4324-aa1e-10dadf3287f4.png?ex=658b3ac5&is=6578c5c5&hm=ddcec997b855224e5fcf2b0f61a43096977c468fd1ca9ee2263081e45dcd478f&",
    attack: "82",
    health: "88",
    coinCost: "16",
    type: "trickster"
  },
  {
    dexNo: "029",
    name: "Terrabite",
    // image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184245418989715586/elrondhubbard_a_terrible_lizard_stands_atop_a_pool_of_toxic_slu_09f95111-747f-4104-8c16-bf39b82f88f9.png?ex=658b457e&is=6578d07e&hm=311a67e75e26686390a5be886c742caef7a36c831d9e30816e5da99c41c18ea2&",
    image: "https://ik.imagekit.io/en4cpe64r/terrabite.png?updatedAt=1709149770807",
    attack: "124",
    health: "86",
    coinCost: "100",
    type: "attacker"
  },
  {
    dexNo: "030",
    name: "Assemblus",
    // image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184253464134553712/elrondhubbard_menacing_deep_sea_kraken_collecting_ships_pokemon_2e4ca9e4-07ad-497c-8fce-68e058a6f12d.png?ex=658b4cfc&is=6578d7fc&hm=c4741a15ede954b51046d29c863d062d07e8c7823129ac118c6ab316ad68c3a1&",
    image: "https://ik.imagekit.io/en4cpe64r/assemblus.png?updatedAt=1709149770643",
    attack: "97",
    health: "98",
    coinCost: "100",
    type: "trickster"
  },
  {
    dexNo: "031",
    name: "Serviroot",
    // image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184250363319173240/elrondhubbard_a_massive_tree_grasping_at_the_earth_pokemon_cute_c902979a-b664-4f9c-80d3-a7c3ad5383d6.png?ex=658b4a18&is=6578d518&hm=70b3ac2f64fa1c1ee8d2dac8e6e9ffbae5aa78baa602a34037a11cb9d35cf842&",
    image: "https://ik.imagekit.io/en4cpe64r/serviroot.png?updatedAt=1709149770823",
    attack: "89",
    health: "134",
    coinCost: "100",
    type: "defender"
  },
  {
    dexNo: "032",
    name: "Gitfetch",
    // image: "https://cdn.discordapp.com/attachments/1062551659168944249/1184252270016221294/elrondhubbard_adorable_terrier_holding_bone_in_mouth_pokemon_cu_b946a97c-7723-44fc-92a7-095ee0c91589.png?ex=658b4bdf&is=6578d6df&hm=2fbd7ba2f68af0b354c40910da2e307998c9f02687978bd0cc655004940dac5f&",
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