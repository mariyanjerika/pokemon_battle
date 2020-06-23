let foe;

function Foe(enemyName, type, speed, moveOne, moveTwo, attack, health_points, weakness, strong_against) {
   this.enemyName = enemyName;
   this.type = type;
   this.moveOne = moveOne;
   this.moveTwo = moveTwo;
   this.speed = speed;
   this.attack = attack;
   this.health_points = health_points;
   this.weakness = weakness;
   this.strong_against = strong_against;
}