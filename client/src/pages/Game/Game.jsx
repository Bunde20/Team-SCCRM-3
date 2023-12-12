import React, { useState, useEffect } from "react";
import userAPI from "../../utils/userAPI";

import Boss from "../../components/GameComponents/Boss";
import Card from "../../components/Card";
import AttackBtn from "../../components/GameComponents/AttackBtn";
import AttackSpecialBtn from "../../components/GameComponents/AttackSpecialBtn";
import DefenseSpecialBtn from "../../components/GameComponents/DefenseSpecialBtn";
import TricksterSpecialBtn from "../../components/GameComponents/TricksterSpecialBtn";
import AlertModal from "../../components/AlertModals/AlertModal";

import ProgressBar from "react-bootstrap/ProgressBar";

import mushroomHallBG from "../../images/mushroomHallBG.png";
import mushroomMin from "../../images/mushroomMin.png";
import dungeonBG from "../../images/dungeonBG.png";
import dungeonMin from "../../images/dungeonMin.png";
import caveBG from "../../images/caveBG.png";
import caveMin from "../../images/caveMin.png";
import "./Game.css";

const bosses = [
  {
    name: "STANMANGA: SOURCE OF TRUTH",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183061338923221052/elrondhubbard_indescribable_horror_professor_hellbent_on_punish_126d99b6-2330-4081-9e0b-d68ebb89f6e1.png?ex=6586f6bb&is=657481bb&hm=258d50141f750a9131b309a37e338046493973e8211b771ce7d967682571c245&",
    health: 500,
    attack: 15,
    background: dungeonBG,
    bgMin: dungeonMin,
    bossIntro: "A WICKED PROFESSOR APPROACHES!",
  },
  {
    name: "GOGOL: DATA DEVOURER",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183067107349516358/elrondhubbard_horrifying_devourer_of_souls_pokemon_cartoon_game_752ea817-0d3a-4707-b550-2c051e467624.png?ex=6586fc1a&is=6574871a&hm=12d8b930db932780ef381f19ec2b80bc2c3a803986b8bcb74464d66bd4be72db&",
    health: 625,
    attack: 25,
    background: caveBG,
    bgMin: caveMin,
    bossIntro: "GOGOL'S REACH KNOWS NO BOUNDS!",
  },
  {
    name: "GLITCHBLIGHT: THE UNDEFINED",
    image:
      "https://cdn.discordapp.com/attachments/1062551659168944249/1183052268933750877/elrondhubbard_a_monstrous_QR_code_seeping_with_ooze_and_glowing_c15186bc-d4d6-489b-9776-7f81452c8609.png?ex=6586ee48&is=65747948&hm=2eb4078d6b2fcf7e5a33540ad785535301b7f21139eea5e88784d9e101c3ce3a&",
    health: 750,
    attack: 35,
    background: mushroomHallBG,
    bgMin: mushroomMin,
    bossIntro: "DON'T LOOK DIRECTLY AT IT!!!",
  },
];

export default function Game() {
  const [bossAnimation, setBossAnimation] = useState(null);
  const [currentBoss, setCurrentBoss] = useState(bosses[0]);
  const [currentBossAttack, setCurrentBossAttack] = useState(
    currentBoss.attack
  );
  let [bossHealth, setBossHealth] = useState(currentBoss.health);
  const [playerAttacked, setPlayerAttacked] = useState(false);
  const [userCards, setUserCards] = useState([]);
  const [userHealth, setUserHealth] = useState(100);
  const [maxUserHP, setMaxUserHP] = useState(userHealth);
  const [combatMessage, setCombatMessage] = useState(currentBoss.bossIntro);
  const [attackButtonDisabled, setAttackButtonDisabled] = useState(false);
  const [attackSpecialDisabled, setAttackSpecialDisabled] = useState(false);
  const [defenseSpecialDisabled, setDefenseSpecialDisabled] = useState(false);
  const [attackTricksterDisabled, setTricksterSpecialDisabled] =
    useState(false);
  const [bossIsSleepy, setBossIsSleepy] = useState(false);
  const [showRetreatModal, setShowRetreatModal] = useState(false);

  // Deal specified damage to boss
  const handleAttack = (creature, damage) => {
    setBossAnimation("animate__headShake");
    let newBossHealth = (bossHealth -= damage);
    // stops the progress bar from going into the negatives
    setBossHealth(newBossHealth >= 0 ? newBossHealth : 0);
    // lets us keep track of when the player has attacked
    setPlayerAttacked(true);
    // Display attack message
    let creatureName = creature.name;
    setCombatMessage(`${creatureName.toUpperCase()} ATTACKED!`);
    // Disable attack button until boss retaliates
    setAttackButtonDisabled(true);
    console.log("bosshealth", bossHealth);
  };

  const handleSpecialAttack = (creature) => {
    let creatureType = creature.type;
    let creatureName = creature.name.toUpperCase();
    console.log("special was clicked", creatureType);
    if (creatureType === "attacker") {
      setAttackSpecialDisabled(true);
      let newBossHealth = (bossHealth -= 150);
      setBossHealth(newBossHealth >= 0 ? newBossHealth : 0);
      setPlayerAttacked(true);
      setCombatMessage(`${creatureName} USED SPECIAL ATTACK!`);
    }
    if (creatureType === "defender") {
      setDefenseSpecialDisabled(true);
      setUserHealth((userHealth) => {
        let newUserHealth = userHealth + 100;
        newUserHealth = Math.min(newUserHealth, maxUserHP);
        return newUserHealth;
      });
      setDefenseSpecialDisabled(true);
      setPlayerAttacked(true);
      setCombatMessage(`${creatureName} USED HEAL!`);
    }
    if (creatureType === "trickster") {
      setTricksterSpecialDisabled(true);
      setBossIsSleepy(true);
      setPlayerAttacked(true);
      setCombatMessage(`${creatureName} USED SLEEP!`);
    }
  };

  // Take player back to lobby upon defeat
  const handleRetreat = () => {
    window.location.href = '../'
  }

  // On page load...
  useEffect(() => {
    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => {
      setUserCards(res.data[0].team);
      console.log(res.data[0].cards);
    });
  }, []);

  // Set player health
  useEffect(() => {
    const healthArray = userCards.map((card) => card.health);
    console.log("health array", healthArray);
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
          setCurrentBossAttack(nextBoss.attack);
          setAttackSpecialDisabled(false);
          setDefenseSpecialDisabled(false);
          setTricksterSpecialDisabled(false);
          setBossHealth(newBossHealth);
          setCombatMessage(nextBoss.bossIntro);
        } else {
          setBossAnimation("animate__hinge");
        }
      }
    }, 1500);
  }, [bossHealth, currentBoss]);

  // Boss attacks back
  useEffect(() => {
    if (playerAttacked && bossIsSleepy === false) {
      setTimeout(() => {
        if (bossHealth > 0) {
          setBossAnimation("animate__bounceIn");
          setCombatMessage(`${currentBoss.name} RETALIATED!!!`);
          setUserHealth((userHealth) => {
            // generate a random attack value based on the boss's attack
            const randomMultiplier = Math.random() * 0.5 + 1;
            let randomAttack = currentBossAttack * randomMultiplier;
            let newUserHealth = userHealth - randomAttack;
            // Round to the nearest even number
            newUserHealth = Math.round(newUserHealth / 2) * 2;
            // Ensure newUserHealth is not negative
            newUserHealth = Math.max(0, newUserHealth);
            // If boss attack will kill player, show modal
            if (userHealth <= randomAttack) {
              setShowRetreatModal(true);
            }
            return newUserHealth;
          });
        }
        // reset player status to complete turn loop
        setAttackButtonDisabled(false);
        setPlayerAttacked(false);
        // setCurrentBossAttack(currentBoss.attack[0])
      }, 1000);
    }
    if (playerAttacked && bossIsSleepy === true) {
      setCombatMessage(`${currentBoss.name} is sleeping! Shhhh...`);
      setPlayerAttacked(false);
      setTimeout(() => {
        // attack button enabled when boss wakes up to prevent soft-lock
        setAttackButtonDisabled(false);
        // Boss wakes up
        setCombatMessage(`${currentBoss.name} WOKE UP!`);
        setBossIsSleepy(false);
      }, 5000);
    }
  }),
    [playerAttacked, userHealth];

  return (
    <>
      <div
        className="game-bg col-12 bg-dark"
        style={{
          backgroundImage: `url(${currentBoss.background}), url(${currentBoss.bgMin})`,
        }}
      >
        <Boss
          animation={bossAnimation}
          bossName={currentBoss.name}
          bossImage={currentBoss.image}
          maxHP={currentBoss.health}
          bossHealth={bossHealth}
        />
        <p className="fs-4 text-light col-xl-3 mx-auto text-center">
          {combatMessage}
        </p>
        <ProgressBar
          className="my-3 mx-auto col-xl-3"
          now={userHealth}
          max={maxUserHP}
          label={`${userHealth} HP`}
          variant="primary"
          animated
        />
        <div className="d-flex justify-content-center">
          {userCards.map((creature, index) => (
            <div
              key={index}
              className={`animate__animated animate__fadeInLeftBig animate__delay-${index}s`}
            >
              <Card key={`creature_${creature._id}`} creature={creature} />
              {console.log("creatureType", creature.type)}
              <AttackBtn
                target={currentBoss}
                index={index}
                attackDamage={creature.attack}
                onClick={() => handleAttack(creature, creature.attack)}
                disabled={attackButtonDisabled}
                key={`attackBtn_${creature.id}`}
              />
              {creature.type === "attacker" && (
                <AttackSpecialBtn
                  target={currentBoss}
                  attackDamage={creature.attack}
                  onClick={() => handleSpecialAttack(creature)}
                  key={`AttackSpecialBtn_${creature.id}`}
                  disabled={attackSpecialDisabled}
                />
              )}
              {creature.type === "defender" && (
                <DefenseSpecialBtn
                  target={currentBoss}
                  attackDamage={creature.attack}
                  onClick={() => handleSpecialAttack(creature)}
                  key={`DefenseSpecialBtn_${creature.id}`}
                  disabled={defenseSpecialDisabled}
                />
              )}
              {creature.type === "trickster" && (
                <TricksterSpecialBtn
                  target={currentBoss}
                  attackDamage={creature.attack}
                  onClick={() => handleSpecialAttack(creature)}
                  key={`attackSpecialBtn_${creature.id}`}
                  disabled={attackTricksterDisabled}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <AlertModal
        show={showRetreatModal}
        heading="RETREAT!"
        message="Your Programon passed out! Run away!!!"
        handleClose={handleRetreat}
      />
    </>
  );
}
