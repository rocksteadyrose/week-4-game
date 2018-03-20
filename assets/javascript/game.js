var chosen;
var enemies = [];
var defender = [];
var hasCharacterBeenChosen = false;
var enemyDefeated = false;
var characterDefeated = false;
var enemyChosen = false;
var defenderChosen = false;
var characterChosen = false;
var character;



    var characters = [
        {
        name: 'Obi-Wan Kenobi',
        image: 'assets/images/obiwankenobi.jpg',
        health: 120,
        baseAttack: 8,
        attack: 8
        },
      
        {
        name: 'Luke Skywalker',
        image: 'assets/images/lukeskywalker.jpg',
        health: 100,
        baseAttack: 5,
        attack: 5
        },
      
        {
        name: "Darth Sidious",
        image: 'assets/images/darthsidious.jpg',
        health: 150,
        baseAttack: 20,
        attack: 20
        },
        {
        name: "Darth Maul",
        image: 'assets/images/darthmaul.jpg',
        health: 180,
        baseAttack: 25,
        attack: 25
        }
      ];
      
      $(document).ready(function() {

      function setUpCharacterTab(characterName) {
      for(var i = 0; i < characters.length; i++) {
        var characterDiv = $('<div>');
        characterDiv.addClass('thumbnail');
      
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
        character = characters[i];
        characterImageDiv.html(characterImg);
      
        characterDiv.append(characterImageDiv);
      
        $(".characters").append(characterDiv);
     //   characterImg.attr('id', characterId);

        startGame(character);
      }
    }

     function startGame(character) { 
    if (characterChosen === false && enemyChosen === false && defenderChosen === false) {
    $(".thumbnail").on( "click", function() {
        characterChosen = true;
    for (var i = 0; i < characters.length; i++) {
    if (characters[i] = $(this)) {
    characterName = $(this);
    console.log(characterName);
    $(".yourcharacter").append(characters[i]);
    $(".yourcharacter").attr('class', 'yourcharacter');
    
    ;}}})}}

    function chooseEnemies() { 
        enemyChosen = true;
    $(".thumbnail").on( "click", function() {
        for (var i = 0; i < characters.length; i++) {
    $(".enemiesavailable").append($(".characters"));
    $(".characters").attr('class', 'enemycharacter');
    (enemies).push(characters[i]);
   chooseDefender()
    }})}

    function chooseDefender() { 
        if (characterChosen && enemyChosen && defenderChosen === false) {        
        $(".thumbnail").on( "click", function() {
            for (var i = 0; i < characters.length; i++) {
        $(".defendersection").append($(this));
        $(".defendersection").attr('class', 'defendingcharacter');
        defender = $(this);
        console.log(defender);
        defenderChosen = true;
            } } ) }}

    function points() {
        $(".attackButton").on( "click", function() {

        if (characterChosen && defenderChosen) {
        defender.health = defender.health - chosen.attack;// User attacks the defender and decreases the defender's health points
            $(".defendingcharacter").children().html("Health: " + defender.health);
            
            chosen.attack = chosen.attack + chosen.baseAttack;// User's attack power increases

            $(".message").html("<b>You attacked </b>" + defender.name + " for " + chosen.attack + " damage. " + defender.name + " attacked you back for " + defender.baseAttack + " damage.");
            
            $(".yourcharacter").empty();
            $(".yourcharacter").append("<div class = 'thumbnail'>" + chosen.name + '<br>' + chosen.image + '<br><h4>Health: ' + chosen.health + "</h4></div>");

            if (defender.health > 0) {
                chosen.health = chosen.health - defender.baseAttack;}//Counter-attack the user if they're still alive:
            else { 
            $(".message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
            reset(chosen, defenderselector);
            $(".defendingchar").hide();
            }

            if (chosen.health < 0) 
            {$(".message").html("<p>You were defeated by " + defender.name + ". GAME OVER!!</p>");
            gameOver(defenderselector);}
            
            }})}

            function reset(chosen, defenderselector) {
                $(".thumbnail").on( "click", function() {
                $(defenderselector).removeClass("defendingchar defending");
                ($(this)).appendTo('.defender');
                defenderselector = $(this);
                   // $(".defendersection").attr("class", "defender");
                    chooseDefender(chosen, defender, defenderselector);})}

    

    setUpCharacterTab();
    startGame();
    chooseEnemies();
    chooseDefender();
    points();
      
}); 

//   // CLICK FOR INITIAL CHARACTER


  
//   function startGame () {
  
//   $(".thumbnail").on( "click", function() {
//     $(".yourcharacter").append($(this));
//     $(".yourcharacter").attr("class", "yourcharacter");
//     $(".characters").attr("class", "enemies"); //Move remaining characters by giving new attribute and then moving them to enemies section
//     $('.enemiesavailable').append($(".enemies"))
//     char = $(this);
//     chooseCharacter(char);
//     })
// }

// startGame ();

//   // CHOOSE CHARACTER
//   function chooseCharacter(char) {
//     $(char).addClass("characternondefender");

//     if (char.hasClass('thumbnail lukesky characternondefender'))
//     {$(char).addClass("chosencharacter");
//     chosen = character.luke;
//     }
 
//     else if (char.hasClass('thumbnail darthmaul characternondefender'))
//     {chosen = character.darthmaul;
//     $(char).addClass("chosencharacter");
//     }

//     else if (char.hasClass('thumbnail darthsidious characternondefender'))
//     {chosen = character.darthsidious;
//     $(char).addClass("chosencharacter"); 
//         }
   
//     else {chosen = character.obiwan;
//     $(char).addClass("chosencharacter");
//     }
//     char; //what we've clicked on
//     characterChosen = true;
//     defenderChosen;
//     chosen;
//     chooseEnemy(char, chosen);
    
//  }


 

// // CHOOSE ENEMY
// function chooseEnemy(char, chosen) {

//     //enemy = character;

//   //  if ($("div").children(".thumbnail .lukesky"))
//   //  {$(char).addClass("enemycharacter");
//   //      enemy = character.luke;
//   //  }
 
//   //  if (char.hasClass('thumbnail darthmaul'))
//   //  {enemy = character.darthmaul;
//   //      $(char).addClass("enemycharacter");
//   //      }

//   //  if (char.hasClass('thumbnail darthsidious'))
//  //   {enemy = character.darthsidious;
//   //      $(char).addClass("enemycharacter");
//   //      }
   
//  //   else
//  //   {enemy = character.obiwan;
//   //  $(char).addClass("enemycharacter");
//     enemyChosen = true;

//     $(".thumbnail").on( "click", function() {
//         $('.defendersection').append($(this));
//         defenderselector = $(this);
//         $(".defendersection").attr("class", "defender");
//         chooseDefender(chosen, defender, defenderselector);})
// }



// //chooseDefender(defender, defenderselector, chosen);



// //CHOOSE DEFENDER


    

//     function chooseDefender(chosen, defender, defenderselector) { 

//     defenderselector.addClass("defending");
//     defenderselector.removeClass("chosencharacter characternondefender");
        
//         if (defenderselector.hasClass("thumbnail darthmaul defending"))
//         {
//         defender = character.darthmaul;
//         $(defenderselector).addClass("defendingchar");
//         }

//         else if (defenderselector.hasClass("thumbnail lukesky defending"))
//         {
//         defender = character.luke;
//         $(defenderselector).addClass("defendingchar");
//         }
    
//         else if (defenderselector.hasClass("thumbnail darthsidious defending")) {
//         defender = character.darthsidious;
//         $(defenderselector).addClass("defendingchar");
//         }

//         else 
//         {
//         defender = character.obiwan;
//         $(defenderselector).addClass("defendingchar");
//         }

//         defenderChosen = true;

//         defender;

//         chosen;

//         points(chosen, defender, defenderselector);
//         }


//             function points(chosen, defender, defenderselector) {
                    
//                     $(".attackButton").on( "click", function() {

//                     if (characterChosen && defenderChosen) {
//                     defender.health = defender.health - chosen.attack;// User attacks the defender and decreases the defender's health points
//                     $(".defendingchar").children().html("Health: " + defender.health);
                    
//                     chosen.attack = chosen.attack + chosen.baseAttack;// User's attack power increases

//                     $(".message").html("<b>You attacked </b>" + defender.name + " for " + chosen.attack + " damage. " + defender.name + " attacked you back for " + defender.baseAttack + " damage.");
                    
//                     $(".yourcharacter").empty();
//                     $(".yourcharacter").append("<div class = 'thumbnail'>" + chosen.name + '<br>' + chosen.image + '<br><h4>Health: ' + chosen.health + "</h4></div>");

//                     if (defender.health > 0) {
//                         chosen.health = chosen.health - defender.baseAttack;}//Counter-attack the user if they're still alive:
//                     else { 
//                     $(".message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
//                     reset(chosen, defenderselector);
//                     $(".defendingchar").hide();
//                     }

//                     if (chosen.health < 0) 
//                     {$(".message").html("<p>You were defeated by " + defender.name + ". GAME OVER!!</p>");
//                     gameOver(defenderselector);}
                    
//                     }})}

//                     function reset(chosen, defenderselector) {
//                         $(".thumbnail").on( "click", function() {
//                         $(defenderselector).removeClass("defendingchar defending");
//                         ($(this)).appendTo('.defender');
//                         defenderselector = $(this);
//                            // $(".defendersection").attr("class", "defender");
//                             chooseDefender(chosen, defender, defenderselector);})}

//                    function gameOver(defenderselector) {
//                     var button = $("<button class='btn btn-default restartButton'>"+ 'Restart' + "</button>");
//                     $(".restart").append(button);
//                     $(".restart").on( "click", function() {
//                     var characters = $("<div class = 'col-lg-12 characters'>");
//                     $(".container .row").append($(characters));
//                     $(characters).append($(defenderselector));
//                       //  $('.yourcharacter').insertAfter(".col-lg-12, .characters");
//                     // $('.defendingchar').appendTo('.characters');
//                     //  $('.enemiesavailable').appendTo(".characters");
//                     $(button).hide();
//                     startGame();
//                     })
//                    }
// });

    

        



        


  

                

            
                         
                    

