

    var characters = [
        {
        name: 'Belle',
        id: 0,
        image: 'assets/images/belle.jpeg',
        health: 120,
        baseAttack: 8,
        attack: 8
        },
      
        {
        name: 'Elsa',
        id: 1,
        image: 'assets/images/elsa.jpeg',
        health: 100,
        baseAttack: 5,
        attack: 5
        },
      
        {
        name: "Cinderella",
        id: 2,
        image: 'assets/images/cinderella.jpeg',
        health: 150,
        baseAttack: 20,
        attack: 20
        },
        {
        name: "Ariel",
        id: 3,
        image: 'assets/images/ariel.jpeg',
        health: 180,
        baseAttack: 25,
        attack: 25
        }
      ];

var chosen;
var enemies;
var resetReady = false;
var gameisover = false;
var defender = [];
var hasCharacterBeenChosen = false;
var enemyDefeated = false;
var characterDefeated = false;
var enemyChosen = false;
var defenderChosen = false;
var characterChosen = false;
var character;
var restartTrue = false;
var gameIsOver;
var finalArray = [];
var selected = [];
var charId;
var defendersRemaining = 4;
var selectedCharacter = [];
var selectedDefender = [];

 $(document).ready(function() {

      function setUpCharacterTab() {
      for(var i = 0; i < characters.length; i++) {
        var characterDiv = $('<div>');
        characterDiv.addClass('thumbnail initialcharacters');
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
        var characterImg = $('<img>').attr('src', characterImage).width(120).height(100);
        characterImageDiv.html(characterImg);
        
        characterDiv.append(characterImageDiv);
        $(".characters").append(characterDiv);

        $(".restartButton").hide();
      }
    }

    function initializeCharacter() {
        $(".thumbnail").on( "click", function() {
        var charIdcharacter = parseInt($(this).attr("id"));
        character = characters[charIdcharacter];
        // if(selected.length === 0){
       if (selected.length === 0){
        selected.push(character)}
                else {}
        // }
        startGame(character, charIdcharacter);
        })
    }

    function startGame(character, charIdcharacter) { 
        if (characterChosen === false && enemyChosen === false && defenderChosen === false) {
        $(".thumbnail").on( "click", function() {
            $(".yourcharacter").append($(this));
            $(".yourcharacter").attr('class', 'yourcharacter')
            $(".enemiesavailable").append($(".characters"));
            $(".characters").attr('class', 'enemycharacter');
            enemyChosen = true;
            selectDefender(charIdcharacter);
           })}}

        function selectDefender() {
            if (enemyChosen === true) {
            $(".thumbnail").on( "click", function() {
                $(".defendersection").append($(this));
                $(".defendersection").attr('class', 'defendingcharacter');}
            )} 
            initializeDefender();
        }

            function initializeDefender() {
                $(".enemycharacter > .thumbnail").on( "click", function() {
            var charIddefender = parseInt($(".defendingcharacter > .thumbnail").attr("id"));
          //  if(character.id !== charIddefender)
          defender = characters[charIddefender];
         // if ($(defender).hasClass("yourcharacter")) {
         //     defender === character;
         // } else if ($(defender).hasClass("defendingcharacter")) {
        //    defender === defender}
            defenderChosen = true;
            points();
        })   
        }


    function points() {
        
        if (defenderChosen) {
            
            $(".attackButton").on( "click", function() {

             defender.health = defender.health - selected[0].attack;

            $(".defendingcharacter").html("<div style='font-size:20px; font-weight:bold; padding-top: 20px;' class = 'thumbnail defendernew'" + '<h1>' + defender.name + '<br>' + defender.health + '<img src=' + defender.image  + '>'); 

            selected[0].attack = selected[0].attack + selected[0].baseAttack;

            $(".message").html("<b>You attacked </b>" + defender.name + " for " + selected[0].attack + " damage. " + selected[0].name + " attacked you back for " + defender.baseAttack + " damage."); 

            $(".yourcharacter").empty();

            $(".yourcharacter").append("<div style='font-size:20px; font-weight:bold; padding-top: 20px;'class = 'thumbnail'" + '<h1>' + selected[0].name + '<br>' + selected[0].health + '</h1>' + '<img src=' + selected[0].image + '>'); 

        if (selected[0].health < 0) {
            console.log("hello");
            $(".restartButton").show();           
            $(".message").html("<p>You were defeated by " + defender.name + ". GO BACK TO YOUR TOWER OR....</p>");
            $(".restartButton").click(function() {  })} 
            
        if (defender.health < 0) {
                resetReady = true;
                $(".message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
                resetGame();
            } 

            if (defender.health >= 0) {
                selected[0].health = selected[0].health - defender.baseAttack;}

            if (defendersRemaining < 0) {
                gameIsOver = true;
                winner(); } } )}}
             

        function winner() {
            if (gameIsOver) {
            $(".message").html("You win!");
            $(".restartButton").show();}
            $(".restartButton").click(function() {
            window.location.reload();})}

    function resetGame() {
        if (resetReady) {
    $(".thumbnail").on( "click", function() {
        $(".defendingcharacter > .thumbnail").remove();
        $(".defendingcharacter").append($(this));
        $(".defendingcharacter").show();
        $(".defendersection").attr('class', 'defendingcharacter');
        charIddefender = parseInt($(this).attr("id"));
        defender = characters[charIddefender];
        defendersRemaining--;  
        points();
        })}}


    


            setUpCharacterTab();
            initializeCharacter();
            startGame();
            initializeDefender();
            selectDefender();
            points();
           resetGame();      
            winner();


        });

