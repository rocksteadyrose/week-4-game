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


var characterChosen = "";
var enemyChosen = [];

var character = [
        obiwan = 
        {name: "Obi-Wan Kenobi", 
        image: "<img class='characterclass' src='assets/images/obiwankenobi.jpg' width='150px' height='100px'>",
        health: 120},

        luke =
        {name: "Luke Skywalker",
        image: "<img class='characterclass' src='assets/images/lukeskywalker.jpg' width='150px' height='100px'>",
        health: 100},

        darthsidious =
        {name: "Darth Sidious",
        image: "<img class='characterclass' src='assets/images/darthsidious.jpg' width='150px' height='100px'>",
        health: 150},

        darthmaul =
        {name: "Darth Maul",
        image: "<img class='characterclass' src='assets/images/darthmaul.jpg' width='150px' height='100px'>",
        health: 180},
];

$('#characters').append("<div class = 'thumbnail' id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health + "</h4></div>");
$('#characters').append("<div class = 'thumbnail' id = 'lukediv'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
$('#characters').append("<div class = 'thumbnail' id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
$('#characters').append("<div class = 'thumbnail' id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");

//START GAME

//function startGame() {
    //chooseCharacter(character);
   // clickCharactersInitial();
   // }

//CHOOSE YOUR CHARACTER


        
            $(".thumbnail").on( "click", function() {
                
                if (character != this) {
                    $('#enemiesavailable').append(character);
                    //$('#characters').empty();
                }
                if (character = this) {
                    $('#yourcharacter').append(character);}
                })
                    
