const gameState = {
  playerTurn: true,
};

class Programon {
  constructor(name, attack, defense, evasion, health) {
    
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.evasion = evasion;
    this.health = health;

    this.dealDamage = function (target) {
      target.health -= this.attack;
      if (gameState.playerTurn === true) {
        gameState.playerTurn = false;
      } else {
        gameState.player = true;
      }
    };

  }
}

const player = new Programon("Varchar", 57, 50, 50, 100);
const opponent = new Programon("Swinteger", 49, 50, 50, 100);

player.dealDamage(opponent);
opponent.dealDamage(player);
