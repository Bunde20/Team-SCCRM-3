import React, { useState, useEffect } from "react";

import Boss from "../../components/GameComponents/Boss";
import AttackBtn from "../../components/GameComponents/AttackBtn";

import mushroomHallBG from "../../images/mushroomHallBG.png";
import dungeonBG from "../../images/dungeonBG.png";
import caveBG from "../../images/caveBG.png";
import "./Game.css";

const bosses = [
  {
    name: "GLITCHBLIGHT: THE UNDEFINED",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183052268933750877/elrondhubbard_a_monstrous_QR_code_seeping_with_ooze_and_glowing_c15186bc-d4d6-489b-9776-7f81452c8609.png?ex=6586ee48&is=65747948&hm=2eb4078d6b2fcf7e5a33540ad785535301b7f21139eea5e88784d9e101c3ce3a&",
    health: 1000,
    attack: 13,
    background: mushroomHallBG,
  },
  {
    name: "STANMANGA: SOURCE OF TRUTH",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183061338923221052/elrondhubbard_indescribable_horror_professor_hellbent_on_punish_126d99b6-2330-4081-9e0b-d68ebb89f6e1.png?ex=6586f6bb&is=657481bb&hm=258d50141f750a9131b309a37e338046493973e8211b771ce7d967682571c245&",
    health: 750,
    attack: 9,
    background: dungeonBG,
  },
  {
    name: "GOGOL: DATA DEVOURER",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183067107349516358/elrondhubbard_horrifying_devourer_of_souls_pokemon_cartoon_game_752ea817-0d3a-4707-b550-2c051e467624.png?ex=6586fc1a&is=6574871a&hm=12d8b930db932780ef381f19ec2b80bc2c3a803986b8bcb74464d66bd4be72db&",
    health: 875,
    attack: 11,
    background: caveBG,
  },
];

export default function Game() {
  const [currentBoss, setCurrentBoss] = useState(bosses[1]);
  let [bossHealth, setBossHealth] = useState(currentBoss.health)

  const handleClick = () => {
    let newBossHealth = (bossHealth -= 100)
    setBossHealth(newBossHealth)
    console.log(bossHealth)
  };

  useEffect(() => {
    console.log('change')
  }, [bossHealth])

  return (
    <>
      <div
        className="game-bg col-12"
        style={{ backgroundImage: `url(${currentBoss.background})` }}
      >
        <p className="text-light">This is the main game screen.</p>
        <Boss
          bossName={currentBoss.name}
          bossImage={currentBoss.image}
          maxHP={currentBoss.health}
          bossHealth={bossHealth}
        />
      </div>
      <AttackBtn target={currentBoss} attackDamage={100} onClick={() => handleClick()}/>
    </>
  );
}
