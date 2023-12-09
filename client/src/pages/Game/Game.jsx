import React, { useState, useEffect } from "react";
import userAPI from "../../utils/userAPI";

import Boss from "../../components/GameComponents/Boss";
import Card from "../../components/Card";
import AttackBtn from "../../components/GameComponents/AttackBtn";
import ProgressBar from "react-bootstrap/ProgressBar";

import mushroomHallBG from "../../images/mushroomHallBG.png";
import dungeonBG from "../../images/dungeonBG.png";
import caveBG from "../../images/caveBG.png";
import "./Game.css";

const bosses = [
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
  {
    name: "GLITCHBLIGHT: THE UNDEFINED",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183052268933750877/elrondhubbard_a_monstrous_QR_code_seeping_with_ooze_and_glowing_c15186bc-d4d6-489b-9776-7f81452c8609.png?ex=6586ee48&is=65747948&hm=2eb4078d6b2fcf7e5a33540ad785535301b7f21139eea5e88784d9e101c3ce3a&",
    health: 1000,
    attack: 13,
    background: mushroomHallBG,
  },
];

export default function Game() {
  const [currentBoss, setCurrentBoss] = useState(bosses[0]);
  const [currentBossAttack, setCurrentBossAttack] = useState(currentBoss.attack)
  let [bossHealth, setBossHealth] = useState(currentBoss.health);
const[playerAttacked, setPlayerAttacked] = useState(false)
  const [userCards, setUserCards] = useState([]);
  const [userHealth, setUserHealth] = useState(0);
  const [maxUserHP, setMaxUserHP] = useState(userHealth)


  // Deal specified damage to boss
  const handleAttack = (damage) => {
    let newBossHealth = (bossHealth -= damage);
    // stops the progress bar from going into the negatives
    setBossHealth(newBossHealth >= 0 ? newBossHealth : 0);
    // lets us keep track of when the player has attacked
    setPlayerAttacked(true)
    console.log("bosshealth",bossHealth);
  };

  // On page load...
  useEffect(() => {
    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => {
      setUserCards(res.data[0].cards);
     
    });
  }, []);

  // Set player health
  useEffect(() => {
    const healthArray = userCards.map((card) => card.health);
    console.log("health array",healthArray);
    let totalHealth = 0;
    healthArray.forEach((healthValue) => {
      totalHealth += healthValue;
    });
    
    setMaxUserHP(totalHealth);
    setUserHealth(totalHealth);
  }, [userCards]);

  // Progress to next boss upon boss defeat
  useEffect(() => {
    // have to set a timeout otherwise the player will be attacked when the new boss is loaded
    setTimeout(() => {
      if (bossHealth <= 0) {
       
      
      let currentIndex = bosses.indexOf(currentBoss);
      if (currentIndex < bosses.length - 1) {
        const nextBoss = bosses[currentIndex + 1];
        const newBossHealth = nextBoss.health;
        setCurrentBoss(nextBoss);
        setBossHealth(newBossHealth);
      } else {
        alert("YOU BEAT THE GAME!");
      }
 
      }
  },1500)
  }, [bossHealth, currentBoss]);

  // attack back 
  useEffect (() => {
    if (playerAttacked) {
    //  const randomIndex = Math.floor(Math.random() * currentBoss.attack.length)
    //  console.log("random index", randomIndex);
    //  setCurrentBossAttack(currentBoss.attack[randomIndex])
    //  console.log("current boss attack", currentBossAttack);
      
    setTimeout(() => {
      if(bossHealth > 0){
      setUserHealth(userHealth => {
        let newUserHealth = userHealth - currentBossAttack
        if (newUserHealth < 0) {
          newUserHealth = 0
        }
        return newUserHealth
    })
  }
  setPlayerAttacked(false)
    // setCurrentBossAttack(currentBoss.attack[0])

    }, 1000)
  }

    }),[playerAttacked]

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
        <div className="d-flex justify-content-center">
          {userCards.map((creature, index) => (
            <div key={index}>
              <Card key={`creature_${creature._id}`} creature={creature} />
              <AttackBtn
                target={currentBoss}
                index={index}
                attackDamage={creature.attack}
                onClick={() => handleAttack(creature.attack)}
                key={`attackBtn_${creature.id}`}
              />
            </div>
          ))}
        </div>
        <ProgressBar
          className="my-3 col-12"
          now={userHealth}
          max={maxUserHP}
          label={`${userHealth} HP`}
          variant="danger"
          animated
        />
      </div>
    </>
  );
}
