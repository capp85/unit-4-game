var randomNumbers;
var wins = 0;
var loses = 0;
var counter = 0;

//create restart function for whenever player wins or loses.
var resetAndStart = function () { //function to reset and restart game
    $(".crystals").empty(); //removes numbers from previous game 
    $("#userScore").empty()

    var images = [ //crystal images 
        'https://5.imimg.com/data5/IT/RK/MY-19225323/colorful-crystal-stone-500x500.jpg',
        'https://www.rd.com/wp-content/uploads/2017/08/13_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg',
        'https://vignette.wikia.nocookie.net/starwars/images/9/97/KyberCrystal-TCWs1BR1.png/revision/latest?cb=20131016044441',
        'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719',
    ];
    //create four crystal array to be displayed as buttons. 
    //create click function for each crystal that will add specific amount of points to players score counter to equal to random number shown at start should be between 19-120. 

    randomNumbers = Math.floor(Math.random() * (120 - 19) + 1) + 19; //random generator for comp random number between 19-120

    $("#random").html('Random Numbers: ' + randomNumbers); //linking to html to appear on page

    for (var i = 0; i < 4; i++) { //for loop for cyrstals 

        var randomNumber = Math.floor(Math.random() * 12) + 1; //random number generator for crystals bethween 1-12.
        // console.log(" random numbers crystals");
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "data-random": randomNumber //assigns class attribute and class name and applies random number generator on html page
        });
        crystal.css({ //adding crystal images and postion 
            "background-image": "url(" + images[i] + ")",
            "background-size": "cover",
            "background-position": "center",
            "padding": "20px"

        });

        $(".crystals").append(crystal); //inserts content above into all 4 cyrstals
        //console.log(" for loop ");
    }
} //end of crystal content 






//game will hide crystal value amount until it is clicked on.
//when a cyrstal is clicked must update player score counter.
//create random number array to be shown at start of the game. 
$(document).on('click', ".crystal", function () { //crystal click function
    var num = parseInt($(this).attr('data-random')); //converted into a number for math
    counter += num; //adds up numbers in crystals 
    $("#userScore").html("Total Score: " + counter); // displays numbers into html 




    //create player loses function if their score goes above the number shown at beginning of the game.
    if (counter > randomNumbers) { //if numbers from crystals are gretater than random number chosen by comp then signals a loss 
        loses++; //adds loss to loses counter 
        $("#loses").html("You Lose: " + loses); // displays loss counter in html 
        counter = 0; //function to reset counter to 0 after a loss
        resetAndStart(); //refreshes cyrtsal numbers with new ones without refreshing the page.
    }



    //create counters for wins and loses.

    //create player wins function set to win if the total cyrstal score is equal to number shown in beginning of game.

    else if (counter === randomNumbers) { //if numbers in crystals are equal to random number chosen by comp signals a win.
        wins++; //adds win to wins counter
        $("#wins").html("You Win:" + wins); //displays win counter
        counter = 0; //function to reset counter to 0 after a win 
        resetAndStart(); //refreshes cyrtsal numbers with new ones without refreshing the page.

    }
    console.log(counter);
});

resetAndStart(); //refreshes page 
//new game should have new random number shown and each crystal should have new hidden values.
//score counters need to reset back to zero


