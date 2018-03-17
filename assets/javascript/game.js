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
var enemy;
var char;
var defender;

var character = [
       obiwan= 
        {name: "Obi-Wan Kenobi", 
        image: "<img class='characterclass' src='assets/images/obiwankenobi.jpg' width='150px' height='100px'>",
        health: 120},

        luke=
        {name: "Luke Skywalker",
        image: "<img class='characterclass' src='assets/images/lukeskywalker.jpg' width='150px' height='100px'>",
        health: 100},

       darthsidious=
        {name: "Darth Sidious",
        image: "<img class='characterclass' src='assets/images/darthsidious.jpg' width='150px' height='100px'>",
        health: 150},

        darthmaul=
        {name: "Darth Maul",
        image: "<img class='characterclass' src='assets/images/darthmaul.jpg' width='150px' height='100px'>",
        health: 180}
];

var obiwanimage = $(".characters");
obiwanimage.append("<div class = 'thumbnail' id='obiwan'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health + "</h4></div>");
var lukeimage = $(".characters");
lukeimage.append("<div class = 'thumbnail' id='luke'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
var darthsidiousimage = $(".characters");
darthsidiousimage.append("<div class = 'thumbnail' id='darthsidious'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
var darthmaulimage = $(".characters");
darthmaulimage.append("<div class = 'thumbnail' id='darthmaul'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");

$('.characters').append(obiwanimage);
$('.characters').append(lukeimage);
$('.characters').append(darthsidiousimage);
$('.characters').append(darthmaulimage);


  // CLICK FOR INITIAL CHARACTER
   $(".thumbnail").on( "click", function() {
       if (characterChosen === false && enemyChosen === false) {
        
            $('.yourcharacter').append($(this));
            $(".yourcharacter").attr("class", "yourcharacter");
            characterChosen === true;
            char = $(this);
            chooseCharacter(char);
            $(".characters").attr("class", "enemies"); //Move remaining characters by giving new attribute and then moving them to enemies section
            $('.enemiesavailable').append($(".enemies"));
            enemyChosen === true;
            $('.thumbnail').on( "click", function() {
            defender = $(this).data("defender");
            $('.defendersection').append($(this));
            $(".defendersection").attr("class", "defender");
        })}
            }
        )
    
   //    $(".attackButton").on( "click", function() {
   //     $('.defendersection').append("<b>You attacked</b>" + defender + "for" + defender.health + "damage." + defender + "attacked you back for" + defender.health + "damage.");

    

     //   function defender(){
    //        defender = "";
    //    }
        

  // CHOOSE CHARACTER
  function chooseCharacter(char) {
  if (char = $("<div class = 'thumbnail' id='luke'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>"))
  {char = luke; console.log(char)}
 }
//
     // CHOOSE ENEMY
    //function chooseEnemy(character) {
 //   character = enemy;  
    //enemy.push(character);
//}
    



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

  

                

            
                         
                    

