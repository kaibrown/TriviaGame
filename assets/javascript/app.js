
// $(document).ready(function(){

// declaring our counter with the starting time, seconds...
   var counter = 15;


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
      $('<audio src="assets/audio/horns.mp3" autoplay>');

    };
    // $("#v1").html('<source src="test1.mp4" type="video/mp4"></source>' );


// making a run function that will run our countdown clock
     var run = function (){
        IntervalID = setInterval (decrement, 1000);
     };

  
   
     function startGame (){

			 $(".caption").hide();
	         $(".bgimg").removeClass("bgimg").addClass("newbgimg");
	         $(".startpage").show();
	         console.log("the game has begun...now you need to set timer and begin collecting score");
		};

     function startIt (){

        $(".scrollpart").show();
        $(".timerbutton").hide();
        $(".directions").hide();
        run();
        
     };


      $(".startbutton").on("click", startGame);

      // $(".timerbutton").on("click", startIt);

      $(function() {
          $('.timerbutton').on("click", startIt);
                
    });




// };

     

// });
 



