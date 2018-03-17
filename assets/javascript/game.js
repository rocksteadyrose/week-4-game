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

var userChoice = false;
var enemyChoice = false;
var startGame = false;
var enemy;
var char;
var chosenCharacter;

var character = {
       obiwan: 
        {name: "Obi-Wan Kenobi", 
        image: "<img class='characterclass' src='assets/images/obiwankenobi.jpg' width='150px' height='100px'>",
        health: 120},

        luke:
        {name: "Luke Skywalker",
        image: "<img class='characterclass' src='assets/images/lukeskywalker.jpg' width='150px' height='100px'>",
        health: 100},

       darthsidious:
        {name: "Darth Sidious",
        image: "<img class='characterclass' src='assets/images/darthsidious.jpg' width='150px' height='100px'>",
        health: 150},

        darthmaul:
        {name: "Darth Maul",
        image: "<img class='characterclass' src='assets/images/darthmaul.jpg' width='150px' height='100px'>",
        health: 180}
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
            chosenCharacter = $(this).data("chosenCharacter");
            $('.yourcharacter').append($(this));
            $(".yourcharacter").attr("class", "yourcharacter");
            $(".characters").attr("class", "enemies");
            $('.enemiesavailable').append($(".enemies"));
            }
          
        )
        
    
        

  // CHOOSE CHARACTER
    function chooseCharacter(character) {
    characterChosen = true;
     }

     // CHOOSE ENEMY
    function chooseEnemy(character) {
    character = enemy;  
    //enemy.push(character);
}
    



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

   // $(".attackButton").on( "click", function() {
   //  $('.defendersection').append("<b>You attacked</b>" + defender + "for" + defender.health + "damage." + defender + "attacked you back for" + defender.health + "damage.");
//})

                

            
                         
                    

