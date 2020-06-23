//we declare this player object constructor in this game_manager METHOD but assign it in game_manager to make it accessible everywhere/global
let player;

function Player(classType, health, mana, strength, agility, speed) {
   this.classType = classType;
   this.health = health;
   this.mana = mana;
   this.strength = strength;
   this.agility = agility;
   this.speed = speed;
}

let Playermoves = {
   //calcAttack is a method
   calcAttack: function() {
      //who attacks first
      let getPlayerSpeed = player.speed;
      let getEnemySpeed = enemy.speed;
        //player attacks!
   let playerAttack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
         calcBaseDamage = player.strength * player.mana / 1000;
      } else {
         calcBaseDamage = (player.strength * player.agility) / 1000;
      }

      //we want to vary the damage a bit
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //we calculate how many times we hit the enemy
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility/10)/2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues; //so now we can use the numbers we just created inside the function here
   }
   //enemy attacks!
   let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
         calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
         calcBaseDamage = (enemy.strength * enemy.agility) / 1000;
      }
      //we want to vary the damage a bit
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //we calculate how many times we hit the enemy
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility/10)/2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
   }

   //get player/enemy health to change later!
   let getPlayerHealth = document.querySelector(".health-player");
   let getPlayerHealth = document.querySelector(".health-enemy");

   //initiate attacks!
   if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack(); //now playerAttack value will equal an array that will be returned from this function
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
   }
   
   if (enemy.health <= 0) {
      alert("You won! Refresh the browser to play again.");
      getPlayerHealth.innerHTML = "Health: " + player.health; 
      getEnemyHealth.innerHTML = "Health: 0"; //so enemy health will not be negative value 
   } else {
      getEnemyHealth.innerHTML = "Health: " + enemy.health;
      //enemy attacks:
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
   }
   
   if (player.health <= 0) {
      alert("You lost! Refresh the browser to play again.");
      getPlayerHealth.innerHTML = "Health: 0";
      getEnemyHealth.innerHTML = "Health: 0" + enemy.health; //
   } else { //in the case player hasn't lost yet
      getPlayerHealth.innerHTML = 'Health ' + player.health;
   }
   }
} 
