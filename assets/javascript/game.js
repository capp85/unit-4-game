var randomNumbers;
var wins = 0;
var loses = 0;
var counter = 0;


var resetAndStart = function () {
    $(".crystals").empty();

    var images = [
        'https://5.imimg.com/data5/IT/RK/MY-19225323/colorful-crystal-stone-500x500.jpg',
        'https://www.rd.com/wp-content/uploads/2017/08/13_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg',
        'https://vignette.wikia.nocookie.net/starwars/images/9/97/KyberCrystal-TCWs1BR1.png/revision/latest?cb=20131016044441',
        'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719',
    ];

    randomNumbers = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    //console.log(randomNumbers);

    $("#random").html('Random Numbers: ' + randomNumbers);


    //create four crystal array to be displayed as buttons. 
    //create click function for each crystal that will add specific amount of points to players score counter to equal to random number shown at start should be between 19-120. 

    for (var i = 0; i < 4; i++) { //for loop for cyrstals 

        var randomNumber = Math.floor(Math.random() * 12) + 1; //random number generator for crystals bethween 1-12.
        // console.log(" random numbers crystals");
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "data-random": randomNumber //assigns class attribute and class name and applies random number generator 
        });
        crystal.css({
            "background-image":"url(" + images[i] + ")",
            "background-size":"cover",
            "background-position":"center",
            "padding":"20px"
            
        });


        //console.log("show");

        $(".crystals").append(crystal); //inserts content above into all 4 cyrstals
        //console.log(" for loop ");
    }

    $("#randomnumb").html(randomNumbers);

}
resetAndStart();


//create random number array to be shown at start of the game. 
$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    counter += num;
    $("#randomnumb").html("Total Score: " + counter);

    if (counter > randomNumbers) {
        loses++;
        $("#loses").html("You Lose: " + loses);
        counter = 0;
        resetAndStart();
    }
    else if (counter === randomNumbers) {
        wins++;
        $("#wins").html("You Win:" + wins);
        counter = 0;
        resetAndStart();

    }
    console.log(counter);
});





//game will hide crystal value amount until it is clicked on.
//when a cyrstal is clicked must update player score counter.


//create player wins function set to win if the total cyrstal score is equal to number shown in beginning of game.


//create player loses function if their score goes above the number shown at beginning of the game.


//create restart function for whenever player wins or loses.
//new game should have new random number shown and each crystal should have new hidden values.
//score counters need to reset back to zero


//create counters for wins and loses.

/*var randomNumber = Math.floor(Math.random() * (120-9)+1) + 9;*/
