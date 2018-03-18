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

var char;
var characterChosen = false;
var yourCharacter;
var enemyChosen = false;
var startGame = false;
var defenderChosen = false;
var enemy;
var defender;

var character = {
       obiwan: 
        {name: "Obi-Wan Kenobi", 
        image: "<img class='characterclass' src='assets/images/obiwankenobi.jpg' width='150px' height='100px'>",
        health: 120,
        damage: 8
    },

        luke:
        {name: "Luke Skywalker",
        image: "<img class='characterclass' src='assets/images/lukeskywalker.jpg' width='150px' height='100px'>",
        health: 100,
        damage: 0},

       darthsidious:
        {name: "Darth Sidious",
        image: "<img class='characterclass' src='assets/images/darthsidious.jpg' width='150px' height='100px'>",
        health: 150,
        damage: 0},

        darthmaul:
        {name: "Darth Maul",
        image: "<img class='characterclass' src='assets/images/darthmaul.jpg' width='150px' height='100px'>",
        health: 180,
        damage: 25,}
};

var obiwanimage = $(".characters");
obiwanimage.append("<div class = 'thumbnail' id='obiwan'>"+character.obiwan.name+"<br>"+character.obiwan.image+"<br><h4>Health: "+character.obiwan.health + "</h4></div>");
var lukeimage = $(".characters");
lukeimage.append("<div class = 'thumbnail' id='luke'>"+character.luke.name+"<br>"+character.luke.image+"<br><h4>Health: "+character.luke.health+"</h4></div>");
var darthsidiousimage = $(".characters");
darthsidiousimage.append("<div class = 'thumbnail' id='darthsidious'>"+character.darthsidious.name+"<br>"+character.darthsidious.image+"<br><h4>Health: "+character.darthsidious.health+"</h4></div>");
var darthmaulimage = $(".characters");
darthmaulimage.append("<div class = 'thumbnail' id='darthmaul'>"+character.darthmaul.name+"<br>"+character.darthmaul.image+"<br><h4>Health: "+character.darthmaul.health+"</h4></div>");

$('.characters').append(obiwanimage);
$('.characters').append(lukeimage);
$('.characters').append(darthsidiousimage);
$('.characters').append(darthmaulimage);


  // CLICK FOR INITIAL CHARACTER
  
  $(".thumbnail").on( "click", function() {
    if (characterChosen === false && enemyChosen === false) {
    $(".yourcharacter").append($(this));
    $(".yourcharacter").attr("class", "yourcharacter");
    $(".characters").attr("class", "enemies"); //Move remaining characters by giving new attribute and then moving them to enemies section
    $('.enemiesavailable').append($(".enemies"))
    char = $(this);
    console.log(char);
    chooseEnemy(char)
}

    else  {
    //defender = $(this).data("defender");
    $('.defendersection').append($(this));
    char = $(this);
    $(".defendersection").attr("class", "defender")
    chooseDefender(char);}})
    

  // CHOOSE CHARACTER
  function chooseCharacter(char) {
    char;
    console.log(char);

    if (char = $("<div class = 'thumbnail' id='luke'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>"))
    {char = character.luke;}
 
    if (char = $("<div class = 'thumbnail' id='darthmaul'>"+character.darthmaul.name+"<br>"+character.darthmaul.image+"<br><h4>Health: "+character.darthmaul.health+"</h4></div>"))
    {char = character.darthmaul;}

    if (char = $("<div class = 'thumbnail' id='darthsidious'>"+character.darthsidious.name+"<br>"+character.darthsidious.image+"<br><h4>Health: "+character.darthsidious.health+"</h4></div>"))
        {char = character.darthsidious;}
   
    if (char = $("<div class = 'thumbnail' id='obiwan'>"+character.obiwan.name+"<br>"+character.obiwan.image+"<br><h4>Health: "+character.obiwan.health + "</h4></div>"))
        {char = character.obiwan;}

    characterChosen = true;
 }

// CHOOSE ENEMY
function chooseEnemy(char) {

    if (char = $("<div class = 'thumbnail' id='luke'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>"))
    {char = enemy;
    enemy = character.luke;
}
 
    if (char = $("<div class = 'thumbnail' id='darthmaul'>"+character.darthmaul.name+"<br>"+character.darthmaul.image+"<br><h4>Health: "+character.darthmaul.health+"</h4></div>"))
    {char = enemy;
    enemy = character.darthmaul;
}

    if (char = $("<div class = 'thumbnail' id='darthsidious'>"+character.darthsidious.name+"<br>"+character.darthsidious.image+"<br><h4>Health: "+character.darthsidious.health+"</h4></div>"))
    {char = enemy;
    enemy = character.darthsidious;
}
   
    if (char = $("<div class = 'thumbnail' id='obiwan'>"+character.obiwan.name+"<br>"+character.obiwan.image+"<br><h4>Health: "+character.obiwan.health + "</h4></div>"))
    {char = enemy;
    enemy = character.obiwan;

    enemyChosen = true;
}
}

        
//CHOOSE DEFENDER
function chooseDefender(char) { 
        console.log(char);
        defender;
        console.log(defender);  
         

        if (char = $("<div class = 'thumbnail' id='darthmaul'>"+character.darthmaul.name+"<br>"+character.darthmaul.image+"<br><h4>Health: "+character.darthmaul.health+"</h4></div>"))
        {char = defender;
        defender = character.darthmaul;
       }

        if (char = $("<div class = 'thumbnail' id='luke'>"+character.luke.name+"<br>"+character.luke.image+"<br><h4>Health: "+character.luke.health+"</h4></div>"))
        {char = defender
        defender = character.luke;
        }

        if (char = $("<div class = 'thumbnail' id='darthsidious'>"+character.darthsidious.name+"<br>"+character.darthsidious.image+"<br><h4>Health: "+character.darthsidious.health+"</h4></div>"))
        {char = defender;
        defender = character.darthsidious;
        }

        if (char = $("<div class = 'thumbnail' id='obiwan'>"+character.obiwan.name+"<br>"+character.obiwan.image+"<br><h4>Health: "+character.obiwan.health + "</h4></div>"))
        {char = defender;
        defender = character.obiwan;}
    }

    $(".attackButton").on( "click", function() {
        console.log(defender);
        $('.message').html("<b>You attacked </b>" + defender.name + " for " + defender.damage + " damage. " + defender.name + " attacked you back for " + defender.damage + " damage.");
    })



    




    

        



        


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

  

                

            
                         
                    

