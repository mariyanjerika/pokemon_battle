let GameManager = {
   //below is a method. classType is a variable from the outside(index.html). we are bringing pikachu/bulbasaur/etc into the resetPlayer method. setGamestart is a function with 2 additional methods that run when we call setGameStart. we want to call oonly one function (setGameStart will be called) since in our inddex.html, we have only one event (onclick='')
   setGameStart: function(classType) {
      this.resetPlayer(classType);
      this.setPreFight();
   },
   //this is a method that creates our player
   resetPlayer: function(classType) {
      switch (classType) {
         case "Pikachu":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
         case "Bulbasaur":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
         case "Charmander":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
         case "Squirtle":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
         }
     
      //next we create a variable that will get the actual interface (div class='interface') from the index page, delete it, then create new content over it.
      let getInterface = document.querySelector(".interface");
      getInterface.innerHTML = '<img src="images/' + classType.toLowerCase() + '.jpg" class="image-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p><div>';
   },

   //in prefight method, we will grab different elements from the index page to change them to match within the game. we change the task, the character, the button area with actions, arena, and enemy area
   setPreFight: function() {
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getArena = document.querySelector(".arena");
      getHeader.innerHTML = '<p>Task: Find an enemy!</p> ';
      getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
      getArena.style.visibility = 'visible';
   },

   setFight: function() {
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getEnemy = document.querySelector(".enemy");

      //create enemy
      let enemy00 = new Foe("Pikachu", 100, 0, 50, 100);
      let enemy01 = new Foe("Bubasaur", 100, 0, 50, 100);
      let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
      //console.log(chooseRandomEnemy);
      switch (chooseRandomEnemy) {
         case 0:
            enemy = enemy00; //we took the enemy variable from foe file
            break;
         case 1:
            enemy = enemy01;
            break;
      }
      getHeader.innerHTML = '<p>Task: Choose your move</p>';
      getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>'; //PlayerMoves is an object and calcAttack is a method
      getEnemy.innerHTML = '<img src="images/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
   }
}