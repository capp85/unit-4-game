var randomNumbers;
var wins;
var loses;

randomNumbers = Math.floor(Math.random() * (120-19) +1) + 19;
console.log(randomNumbers);

$("#random").html('Random Numbers: ');


//create four crystal array to be displayed as buttons. 
//create click function for each crystal that will add specific amount of points to players score counter to equal to random number shown at start should be between 19-120. 

for (var i = 0; i < 4; i++) { //for loop for cyrstals 

    var randomNumber = Math.floor(Math.random() * 12) + 1; //random number generator for crystals bethween 1-12.
    console.log(" random numbers crystals");
    var crystal = $("<p>");
    crystal.attr({
        "class": 'crystal', "data-random": randomNumber //assigns class attribute and class name and applies random number generator 
    });
    console.log("show");

    $(".crystals").append(crystal); //inserts content above into all 4 cyrstals
    console.log(" for loop ");
}
//create random number array to be shown at start of the game. 




//game will hide crystal value amount until it is clicked on.
//when a cyrstal is clicked must update player score counter.


//create player wins function set to win if the total cyrstal score is equal to number shown in beginning of game.


//create player loses function if their score goes above the number shown at beginning of the game.


//create restart function for whenever player wins or loses.
//new game should have new random number shown and each crystal should have new hidden values.
//score counters need to reset back to zero


//create counters for wins and loses.

/*var randomNumber = Math.floor(Math.random() * (120-9)+1) + 9;*/
