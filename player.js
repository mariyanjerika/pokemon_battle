let player;

function Player(pokemonName, type, speed, moveOne, moveTwo, attack, health_points, weakness, strong_against) {
   this.pokemonName = pokemonName;
   this.type = type;
   this.moveOne = moveOne;
   this.moveTwo = moveTwo;
   this.speed = speed;
   this.attack = attack;
   this.health_points = health_points;
   this.weakness = weakness;
   this.strong_against = strong_against;
}

let getPlayerDamage = player.attack;
let getFoeDamage = foe.attack;
let offsetDamage = Math.floor(Math.random() * Math.floor(10));
let damageDealt = 0;
let getPlayerSpeed = player.speed;
let getFoeSpeed = foe.speed;
let getPlayerHealth = document.querySelector(".health-player");
let getFoeHealth = document.querySelector(".health-foe");

let playerMoveOne = {
   calcAttack: function() {
      damageDealt = getPlayerDamage;
      damageDealt += offsetDamage;

      //player attacks first
      if (getPlayerSpeed >= getFoeSpeed) {
         foe.health_points = foe.health_points - damageDealt;
         alert("You dealt " + damageDealt + " to foe " + foe.pokemonName + "!");

         if (foe.health_points <= 0) {
            alert("You won! Refresh the browser to play again ~");
            getPlayerHealth.innerHtml = "Health: " + player.health_points;
            getFoeHealth.innerHTML = 0;
         } else {
            getFoeHealth.innerHTML = "Health: " + foe.health_points;
            alert("Foe " + foe.pokemonName + "dealt " + foeDamage + "to your pokemon > n <!")
         }

         if (player.health_points <= 0) {
            alert("You lost! Refresh the browser to play again ~")
            getPlayerHealth.innerHTML = "Health: 0";
            getFoeHealth.innerHTML = "Health: " + foe.health_points;
         } else {
            getPlayerHealth.innerHTML = "Health: " + player.health_points;
         }
      }         
   }
}

let playerMoveTwo = {
   calcAttackTwo: function() {
      if ((foe.type == player.weakness[0] || foe.type == player.weakness[1]) || foe.type == player.weakness[2]) {
         dealDamage = player.attack / 2;
         dealDamage += offsetDamage;
      } else if (foe.type == player.strong_against[0] || foe.type == player.strong_against[1]) {
         dealDamage = player.attack * 2;
         dealDamage += offsetDamage;
      } else {
         dealDamage += offsetDamage;
      }

      //player attacks first
      if (getPlayerSpeed >= getFoeSpeed) {
         foe.health_points = foe.health_points - dealDamage;
         alert("You dealt " + dealDamage + " to foe " + foe.pokemonName + "!");

         if (foe.health_points <= 0) {
            alert("You won! Refresh the browser to play again ~");
            getPlayerHealth.innerHtml = "Health: " + player.health_points;
            getFoeHealth.innerHTML = 0;
         } else {
            getFoeHealth.innerHTML = "Health: " + foe.health_points;
            alert("Foe " + foe.pokemonName + "dealt " + getFoeDamage + "to your pokemon > n <!")
         }

         if (player.health_points <= 0) {
            alert("You lost! Refresh the browser to play again ~")
            getPlayerHealth.innerHTML = "Health: 0";
            getFoeHealth.innerHTML = "Health: " + foe.health_points;
         } else {
            getPlayerHealth.innerHTML = "Health: " + player.health_points;
         }      
      }
   }
}