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


var characterChosen;
var enemyChosen = false;

var character = [
        obiwan = 
        {name: "Obi-Wan Kenobi", 
        image: "<img src='assets/images/obiwankenobi.jpg' width='100px'>",
        health: 120},

        luke =
        {name: "Luke Skywalker",
        image: "<img src='assets/images/lukeskywalker.jpg' width='100px'>",
        health: 100},

        darthsidious =
        {name: "Darth Sidious",
        image: "<img src='assets/images/darthsidious.jpg' width='100px'>",
        health: 150},

        darthmaul =
        {name: "Darth Maul",
        image: "<img src='assets/images/darthmaul.jpg' width='100px'>",
        health: 180},
];

$('#characters').append("<div id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health + "</h4></div>");
$('#characters').append("<div id = 'lukediv'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
$('#characters').append("<div id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
$('#characters').append("<div id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");

//START GAME

function startGame() {
    clickCharactersInitial();
    }

//CHOOSE YOUR CHARACTER

function chooseCharacter(character) {
    function clickCharactersInitial() {
    $( "#obiwandiv").on( "click", function() {
        $('#yourcharacter').append("<div id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health + "</h4></div>");
        $("#obiwandiv").empty();
        $("#lukediv").off('click'); $("#darthsdiv").off('click'); $("#darthmdiv").off('click');
        chooseCharacter(obiwan);
        //chooseEnemies(character);
    })

    $( "#lukediv").on( "click", function() {
        $('#yourcharacter').append("<div id = 'lukediv'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
        $("#lukediv").empty();
        $("#obiwandiv").off('click'); $("#darthsdiv").off('click'); $("#darthmdiv").off('click');
        //characterChosen = luke;
        //chooseEnemies(character);
    })

    $( "#darthsdiv").on( "click", function() {
        $('#yourcharacter').append("<div id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
        $("#darthsdiv").empty();
        $("#obiwandiv").off('click'); $("#lukediv").off('click'); $("#darthmdiv").off('click');
        chooseCharacter(luke);
        //chosenCharacter = darthsidious;
        //chooseEnemies(darthsidious);
    })

    $( "#darthmdiv").on( "click", function() {
        $('#yourcharacter').append("<div id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");
        $("#darthmdiv").empty();
        $("#obiwandiv").off('click'); $("#lukediv").off('click'); $("#darthsdiv").off('click');
        //chosenCharacter = darthmaul;
        //chooseEnemies(darthmaul);
    })
    }
}

function chooseEnemies() {
    if (characterChosen = obiwan); {
    $('#enemiesavailable').append("<div id = 'lukediv'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
    $('#enemiesavailable').append("<div id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
    $('#enemiesavailable').append("<div id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");
    $("#obiwandiv").empty(); $("#lukediv").empty(); $("#darthsdiv").empty(); $("#darthmdiv").empty();
}

    if (characterChosen = luke); {
    $('#enemiesavailable').append("<div id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health+"</h4></div>");
    $('#enemiesavailable').append("<div id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
    $('#enemiesavailable').append("<div id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");
    $("#obiwandiv").empty(); $("#lukediv").empty(); $("#darthsdiv").empty(); $("#darthmdiv").empty();
}
}



startGame();








//CHARACTER CREATION
//var obiWanPic = $("<img>");
//obiWanPic.attr("src", obiwan.image);
//obiWanPic.attr("width", "100");
//obiWanPic.addClass("character obiwan");
//$("#characterrow").append(obiWanPic);

//var lukePic = $("<img>");
//lukePic.attr("src", luke.image);
//lukePic.attr("width", "100");
//lukePic.addClass("character luke");
//$("#characterrow").append(lukePic);

//var darthSPic = $("<img>");
//darthSPic.attr("src", darthsidious.image);
//darthSPic.attr("width", "100");
//darthSPic.addClass("character darthS");
//$("#characterrow").append(darthSPic);

//var darthMPic = $("<img>");
//darthMPic.attr("src", darthmaul.image);
//darthMPic.attr("width", "100");
//darthMPic.addClass("character darthM");
//$("#characterrow").append(darthMPic);



//if (chosenCharacter = luke) {
  //  $('#enemiesavailable').append("<div id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health+"</h4></div>");
  //  $('#enemiesavailable').append("<div id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
  //  $('#enemiesavailable').append("<div id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");
  //  $("#obiwandiv").empty(); $("#lukediv").empty(); $("#darthsdiv").empty(); $("#darthmdiv").empty();
//}

   // if (chosenCharacter = darthsidious) {
   // $('#enemiesavailable').append("<div id = 'lukediv'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
   // $('#enemiesavailable').append("<div id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health+"</h4></div>");
  //  $('#enemiesavailable').append("<div id = 'darthmdiv'>"+darthmaul.name+"<br>"+darthmaul.image+"<br><h4>Health: "+darthmaul.health+"</h4></div>");
  //  $("#obiwandiv").empty(); $("#lukediv").empty(); $("#darthsdiv").empty(); $("#darthmdiv").empty();
//}

  //  if (chosenCharacter = darthmaul) {
  //  $('#enemiesavailable').append("<div id = 'lukediv'>"+luke.name+"<br>"+luke.image+"<br><h4>Health: "+luke.health+"</h4></div>");
  //  $('#enemiesavailable').append("<div id = 'darthsdiv'>"+darthsidious.name+"<br>"+darthsidious.image+"<br><h4>Health: "+darthsidious.health+"</h4></div>");
  //  $('#enemiesavailable').append("<div id = 'obiwandiv'>"+obiwan.name+"<br>"+obiwan.image+"<br><h4>Health: "+obiwan.health+"</h4></div>");
  //  $("#obiwandiv").empty(); $("#lukediv").empty(); $("#darthsdiv").empty(); $("#darthmdiv").empty();
//}