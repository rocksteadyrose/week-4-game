//PSEUDO CODE
//CHOOSE YOUR CHARACTER OUT OF 4. CHARACTERS HAVE 3 ATTRIBUTES: Health Points, Attack Power and Counter Attack Power.
//ANY OF THE CHARACTERS YOU DON'T CHOOSE BECOME YOUR ENEMIES THAT YOU CAN ATTACK
//CLICK AN ENEMY TO ATTACK. 1 ATTRIBUTE: Counter Attack Power
//IF YOU CLICK ATTACK WITHOUT PICKING ONE FIRST, IT WILL TELL YOU TO PICK A CHARACTER ["NO ENEMY HERE"]
//ENEMIES MOVES TO ENEMIES AVAILABLE TO ATTACK AREA AND TURN RED
//THEY TURN BLACK AND MOVE TO DEFENDER AREA
//CLICK ATTACK TO FIGHT THEM
//STATS TELL YOU HOW THE ATTACK WENT FOR YOUR CHARACTER AND THE ENEMY
//ONCE YOU'RE DEFEATED, THE GAME IS OVER
//IF YOU WIN, IT SAYS YOU HAVE DEFEATED [ENEMY]. YOU CAN CHOOSE TO FIGHT ANOTHER ENEMY
//CLICK RESTART TO RESTART
//EACH TIME YOU RESTART, ONE LESS ENEMY REMAINS
//EACH TIME YOU RESTART AND PICK A NEW ENEMY, YOUR ATTACK POWER IS HIGHER. IT SLOWLY INCREASES IT
//ONCE YOU DEFEAT THE LAST ENEMY, 'YOU WON! GAME OVER!'
//CAN CHOOSE RESTART IF YOU WANT

//START
//ON CLICK
//POINTS
//RESET


//VARIABLES
$(document).ready(function() {

var char;
var characterChosen = false;
var yourCharacter;
var chosen = {};
var defenderselector;
var enemyChosen = false;
var startGame = false;
var defenderChosen = false;
var enemy;
var defender = {};

var character = {
       obiwan: 
        {name: "Obi-Wan Kenobi", 
        image: "<img class='characterclass' src='assets/images/obiwankenobi.jpg' width='150px' height='100px'>",
        health: 120,
        baseAttack: 8,
        attack: 8
    },

        luke:
        {name: "Luke Skywalker",
        image: "<img class='characterclass' src='assets/images/lukeskywalker.jpg' width='150px' height='100px'>",
        health: 100,
        baseAttack: 5,
        attack: 5},

       darthsidious:
        {name: "Darth Sidious",
        image: "<img class='characterclass' src='assets/images/darthsidious.jpg' width='150px' height='100px'>",
        health: 150,
        baseAttack: 20,
        attack: 20},

        darthmaul:
        {name: "Darth Maul",
        image: "<img class='characterclass' src='assets/images/darthmaul.jpg' width='150px' height='100px'>",
        health: 180,
        baseAttack: 25,
        attack: 25}
};

var obiwanimage = $(".characters");
obiwanimage.append("<div class = 'thumbnail obiwan'>"+character.obiwan.name+"<br>"+character.obiwan.image+"<br><h4>Health: "+character.obiwan.health + "</h4></div>");
var lukeimage = $(".characters");
lukeimage.append("<div class = 'thumbnail lukesky'>"+character.luke.name+"<br>"+character.luke.image+"<br><h4>Health: "+character.luke.health+"</h4></div>");
var darthsidiousimage = $(".characters");
darthsidiousimage.append("<div class = 'thumbnail darthsidious'>"+character.darthsidious.name+"<br>"+character.darthsidious.image+"<br><h4>Health: "+character.darthsidious.health+"</h4></div>");
var darthmaulimage = $(".characters");
darthmaulimage.append("<div class = 'thumbnail darthmaul'>"+character.darthmaul.name+"<br>"+character.darthmaul.image+"<br><h4>Health: "+character.darthmaul.health+"</h4></div>");

$('.characters').append(obiwanimage);
$('.characters').append(lukeimage);
$('.characters').append(darthsidiousimage);
$('.characters').append(darthmaulimage);


  // CLICK FOR INITIAL CHARACTER
  
  $(".thumbnail").on( "click", function() {
    $(".yourcharacter").append($(this));
    $(".yourcharacter").attr("class", "yourcharacter");
    $(".characters").attr("class", "enemies"); //Move remaining characters by giving new attribute and then moving them to enemies section
    $('.enemiesavailable').append($(".enemies"))
    char = $(this);
    chooseCharacter(char);
    })
    
    chooseCharacter(char);

  // CHOOSE CHARACTER
  function chooseCharacter(char) {
    $(char).addClass("characternondefender");

    if (char.hasClass('thumbnail lukesky characternondefender'))
    {$(char).addClass("chosencharacter");
    chosen = character.luke;
    }
 
    else if (char.hasClass('thumbnail darthmaul characternondefender'))
    {chosen = character.darthmaul;
    $(char).addClass("chosencharacter");
    }

    else if (char.hasClass('thumbnail darthsidious characternondefender'))
    {chosen = character.darthsidious;
    $(char).addClass("chosencharacter"); 
        }
   
    else {chosen = character.obiwan;
    $(char).addClass("chosencharacter");
    }
    char; //what we've clicked on
    characterChosen = true;
    chosen;
    console.log(chosen);
    chooseEnemy(char, chosen);
    
 }


 

// CHOOSE ENEMY
function chooseEnemy(char, chosen) {

    //enemy = character;

  //  if ($("div").children(".thumbnail .lukesky"))
  //  {$(char).addClass("enemycharacter");
  //      enemy = character.luke;
  //  }
 
  //  if (char.hasClass('thumbnail darthmaul'))
  //  {enemy = character.darthmaul;
  //      $(char).addClass("enemycharacter");
  //      }

  //  if (char.hasClass('thumbnail darthsidious'))
 //   {enemy = character.darthsidious;
  //      $(char).addClass("enemycharacter");
  //      }
   
 //   else
 //   {enemy = character.obiwan;
  //  $(char).addClass("enemycharacter");
    enemyChosen = true;

    $(".thumbnail").on( "click", function() {
        $('.defendersection').append($(this));
        defenderselector = $(this);
        $(".defendersection").attr("class", "defender");
        chooseDefender(chosen);})
}



//chooseDefender(defender, defenderselector, chosen);



//CHOOSE DEFENDER


    

    function chooseDefender(chosen) { 
    defenderselector.addClass("defending");
    defenderselector.removeClass("chosencharacter characternondefender");
   // defender = character;
        
        if (defenderselector.hasClass("thumbnail darthmaul defending"))
        {
        defender = character.darthmaul;
        $(defenderselector).addClass("defendingchar");
        }

        else if (defenderselector.hasClass("thumbnail lukesky defending"))
        {
        defender = character.luke;
        $(defenderselector).addClass("defendingchar");
        }
    
        else if (defenderselector.hasClass("thumbnail darthsidious defending")) {
        defender = character.darthsidious;
        $(defenderselector).addClass("defendingchar");
        }

        else 
        {
        defender = character.obiwan;
        $(defenderselector).addClass("defendingchar");
        }

        defender;
        console.log(defender);

        chosen;
        console.log(chosen);

        points(chosen, defender, defenderselector);
        }


            function points(chosen, defender, defenderselector) {
                    $(".attackButton").on( "click", function() {

                    defender.health = defender.health - chosen.attack;// User attacks the defender and decreases the defender's health points
                    $(".defendingchar").children().html("Health: " + defender.health);
                    
                    chosen.attack = chosen.attack + chosen.baseAttack;// User's attack power increases

                    $(".message").html("<b>You attacked </b>" + defender.name + " for " + chosen.baseAttack + " damage. " + defender.name + " attacked you back for " + defender.baseAttack + " damage.");
                    
                    $(".yourcharacter").empty();
                    $(".yourcharacter").append("<div class = 'thumbnail'>" + chosen.name + '<br>' + chosen.image + '<br><h4>Health: ' + chosen.health + "</h4></div>");



                    if (defender.health > 0) {
                        chosen.health = chosen.health - defender.baseAttack;}//Counter-attack the user if they're still alive:
                    
                    
                    else { $(".message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
                    $(".defendingchar").hide();}

                    if (chosen.health < 0) 
                    {
                    $(".message").html("<p>You were defeated by " + defender.name + ". Choose another enemy.</p>");
                    $(".defendingchar").hide();}})}
             


});

    

        



        


//  $(char)).remove('.enemiesavailable');

     //CHOOSE ENEMY
  //     $(".thumbnail").on( "click", function() {
   //     for (var i = 0; i < character.length; i++) {
    //        if (character[i] = this) {
    //           $('.defendersection').append(character[i]);
     //            $(character[i]).addClass("defender-character").removeClass("enemy-character");
     //            ;}
    //         })

    //     if (character[i] != this) {
    //         $('.enemiesavailable').append("<div class = 'thumbnail'>"+character[i].name+"<br>"+character[i].image+"<br><h4>Health: "+character[i].health+"</h4></div>");
  //           startGame = true;
   //            $('.enemiesavailable').append(enemyChosen);
// }
//Add in disabling of buttons above
   // START GAME

  

                

            
                         
                    

