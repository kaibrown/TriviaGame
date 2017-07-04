
// $(document).ready(function(){

// declaring our counter with the starting time, seconds...
   var counter = 5;


// declaring a variable that will hold out interval when we start 'run' function
   var IntervalID;

// making a function to countdown the time given to answer questions...

  var decrement = function (){
        counter--;
        $(".gameName").html("<h1> You have " + counter + " seconds left...</h1>");
        if (counter === 0){
          stop();

        } 
    };
// making a stop function, when time runs out...
// put up banner that says Time is Up and then hide the quiz portion
// play the womp womp music 
  var stop = function (){

            clearInterval (IntervalID);
            $('.gameName').html("<h1> Time is Up!! </h1>")
            $(".scrollpart").hide();
            // how do I stop the other music????
            $(".bgmusic").replaceWith('<audio src="assets/audio/horns.mp3" autoplay>');
            $(".showResults").show();

           };
    


// making a run function that will run our countdown clock
     var run = function (){
        IntervalID = setInterval (decrement, 1000);
     };

  
//This function takes us to the Grocery Game gamepage , but NO questions, read directions and user must press button to begin  
     function startGame (){

			 $(".caption").hide();
	         $(".bgimg").removeClass("bgimg").addClass("newbgimg");
	         $(".startpage").show();
	         console.log("the game has begun...now you need to set timer and begin collecting score");
		};


// This function will actually display the Grocery game and begin timer 'run' function
     function startIt (){

        $(".scrollpart").show();
        $(".timerbutton").hide();
        $(".directions").hide();
        run();
        
     };

// calling my functions and associating them with click events

      $(".startbutton").on("click", startGame);

      $(".timerbutton").on("click", startIt);

    

 //need to create game logic for the  

// var cat1 = ($("input[@name=q1]:checked").val() != "a");
// var cat2 = ($("input[@name=q2]:checked").val() != "b");
// var cat3 = ($("input[@name=q3]:checked").val() != "c");

// var cat4 = (!cat1 && !cat2 && !cat3);
// var categories = []; 

// if (cat1) { categories.push(cat1name) };            
// if (cat2) { categories.push(cat2name) };            
// if (cat3) { categories.push(cat3name) };

     

// });
 



