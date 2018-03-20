

    var characters = [
        {
        name: 'Obi-Wan Kenobi',
        id: 0,
        image: 'assets/images/obiwankenobi.jpg',
        health: 120,
        baseAttack: 8,
        attack: 8
        },
      
        {
        name: 'Luke Skywalker',
        id: 1,
        image: 'assets/images/lukeskywalker.jpg',
        health: 100,
        baseAttack: 5,
        attack: 5
        },
      
        {
        name: "Darth Sidious",
        id: 2,
        image: 'assets/images/darthsidious.jpg',
        health: 150,
        baseAttack: 20,
        attack: 20
        },
        {
        name: "Darth Maul",
        id: 3,
        image: 'assets/images/darthmaul.jpg',
        health: 180,
        baseAttack: 25,
        attack: 25
        }
      ];

var chosen;
var enemies;
var resetReady = false;
var defender = [];
var hasCharacterBeenChosen = false;
var enemyDefeated = false;
var characterDefeated = false;
var enemyChosen = false;
var defenderChosen = false;
var characterChosen = false;
var character;
var selected = [];
var finalArray = [];
var charId;
var defendersRemaining = 3;



 $(document).ready(function() {

      function setUpCharacterTab() {
      for(var i = 0; i < characters.length; i++) {
        var characterDiv = $('<div>');
        characterDiv.addClass('thumbnail');
        var charIDgive = characters[i].id;
        characterDiv.attr('id', charIDgive);
      
        characterName = characters[i].name;
        var characterHealth = characters[i].health;
        var characterImage = characters[i].image;
      
        characterDiv.attr('character', characterName);
        
        var characterTitle = $('<h3>');
        characterTitle.text(characterName);
        characterDiv.append(characterTitle);
      
        var characterHealthTitle = $('<h4>');
        characterHealthTitle.text(characterHealth);
        characterDiv.append(characterHealthTitle);
        
        var characterImageDiv = $('<div>');
        var characterImg = $('<img>').attr('src', characterImage).width(150).height(150);
        characterImageDiv.html(characterImg);
        
        characterDiv.append(characterImageDiv);
        $(".characters").append(characterDiv);
      }
    }

    function initializeCharacter() {
        $(".thumbnail").on( "click", function() {
        var charIdcharacter = parseInt($(this).attr("id"));
        character = characters[charIdcharacter];
        selected.push(character);
        selected.attack;
        startGame(character, charIdcharacter);})
            }
        
     function startGame(character, charIdcharacter) { 
        if (characterChosen === false && enemyChosen === false && defenderChosen === false) {
        $(".thumbnail").on( "click", function() {
            $(".yourcharacter").append($(this));
            $(".yourcharacter").attr('class', 'yourcharacter')
            $(".enemiesavailable").append($(".characters"));
            $(".characters").attr('class', 'enemycharacter');
            enemyChosen = true;
            selectDefender(character, charIdcharacter);
           })}}

        function selectDefender(character, charIdcharacter) {
            if (enemyChosen === true) {
            $(".thumbnail").on( "click", function() {
                $(".defendersection").append($(this));
                $(".defendersection").attr('class', 'defendingcharacter');}
            )} 
            initializeDefender(character);
        }

            function initializeDefender(character) {
                $(".thumbnail").on( "click", function() {
            var charIddefender = parseInt($(this).attr("id"));
            defender = characters[charIddefender];
            defenderChosen = true;
        })
            points(defender, character);
        }


    function points(defender, character) {
               
        if (defenderChosen) {
            console.log(defendersRemaining);
            $(".attackButton").on( "click", function() {
             defender.health = defender.health - selected[0].attack;// Character attacks the defender and decreases the defender's health points
            // 
            //     if (characterChosen && defenderChosen) {
            $(".defendingcharacter").children().html("Health: " + defender.health);
            // defender;
            selected[0].attack = selected[0].attack + selected[0].baseAttack;// User's attack power increases

            $(".message").html("<b>You attacked </b>" + defender.name + " for " + selected[0].attack + " damage. " + defender.name + " attacked you back for " + defender.baseAttack + " damage.");
            
            $(".yourcharacter").empty();
            $(".yourcharacter").append("<div class = 'thumbnail'>" + selected[0].name + '<br>' + selected[0].image + '<br><h4>Health: ' + selected[0].health + "</h4></div>");

       if (defender.health > 0) {
        selected[0].health = selected[0].health - defender.baseAttack;}//Counter-attack the user if they're still 
            else { 
            $(".message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
            resetReady = true;
            resetGame();   
            }

     if (selected[0].health < 0) 
     {$(".message").html("<p>You were defeated by " + defender.name + ". GAME OVER!!</p>");
    gameOver()
   }

     if (defendersRemaining === 0) {
        {$(".message").html("<p>OUT OF DEFENDERS! GAME OVER!!</p>");
         gameOver();}
     }
        }
        )
        }}

        function resetGame() {
            if (resetReady === true) {
            $(".thumbnail").on( "click", function() {
                $(".defendingcharacter > .thumbnail").remove();
                $(".defendingcharacter").append($(this));
                $(".defendingcharacter").show();
                $(".defendersection").attr('class', 'defendingcharacter');
                charIddefender = parseInt($(this).attr("id"));
                defender = characters[charIddefender];
                defendersRemaining--;
            }) 
            points(defender);
        }}

        function gameOver() {
            $(".enemycharacter").children().appendTo(".characters");



        }


            setUpCharacterTab();
            initializeCharacter();
            startGame();
            initializeDefender();
            selectDefender();
            points();
            resetGame();
            gameOver();


        });

