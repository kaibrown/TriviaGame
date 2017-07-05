
// $(document).ready(function(){

// declaring our counter with the starting time, seconds...
   var counter = 40;


// declaring a variable that will hold out interval when we start 'run' function
   var IntervalID;

// variables to hold out score and write it to document
 var answersRight;
 var answersWrong;
 var notAnswered;  

 var writeRight = $(".rightAnswers");
 var writeWrong = $(".wrongAnswers");
 var writeUnanswered = $(".notAnswered");

 // 
 // These are the functions
 //         vvvvvvvvv
 // 

// making a function to countdown the time given to answer questions...
// I inculded the answerCheck function so that it could run when the time hit 0
  var decrement = function (){
        counter--;
        $(".gameName").html("<h1> You have " + counter + " seconds left...</h1>");
        if (counter === 0){
          stop();
          $(".newbgimg").removeClass("newbgimg").addClass("finalbgimg");
          answerChecker();
          return;
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


     //
      //PLAYING AROUNG HERE WITH GAME LOGIC
       //
        
  var answerChecker = function(){

      answersRight = 0;
      answersWrong = 0;
      notAnswered = 0;


      writeRight.text(answersRight);
      writeWrong.text(answersWrong);
      writeUnanswered.text(notAnswered);

      var q1Answer = $("#question1").val();
      
      console.log(q1Answer);

      var q2Answer = $("#question2").val();
      
      console.log(q2Answer);

      var q3Answer = $("#question3").val();
      
      console.log(q3Answer);

      var q4Answer = $("#question4").val();

      console.log(q4Answer);

       var q5Answer = $("#question5").val();

      console.log(q5Answer);


  console.log("ok everything is running fine, but now you need to compare answers..." );

   
    if (q1Answer === "2" ||  q1Answer === "3" ) {
        answersWrong++;
        writeWrong.text(answersWrong);
    } else if (q1Answer === "1" ) {
        answersRight++;
        writeRight.text(answersRight);
    } else {
        notAnswered++;
        writeUnanswered.text(notAnswered);
    }

  if (q2Answer === "2" ||  q2Answer === "3" ) {
        answersWrong++;
        writeWrong.text(answersWrong);
    } else if (q2Answer === "1" ) {
        answersRight++;
        writeRight.text(answersRight);
    } else {
        notAnswered++;
        writeUnanswered.text(notAnswered);
    }

  if (q3Answer === "2" ||  q3Answer === "3" ) {
        answersWrong++;
        writeWrong.text(answersWrong);
    } else if (q3Answer === "1" ) {
        answersRight++;
        writeRight.text(answersRight);
    } else {
        notAnswered++;
        writeUnanswered.text(notAnswered);
    }

  if (q4Answer === "2" ||  q4Answer === "3" ) {
        answersWrong++;
        writeWrong.text(answersWrong);
    } else if (q4Answer === "1" ) {
        answersRight++;
        writeRight.text(answersRight);
    } else {
        notAnswered++;
        writeUnanswered.text(notAnswered);
    }

      if (q5Answer === "2" ||  q5Answer === "3" ) {
        answersWrong++;
        writeWrong.text(answersWrong);
    } else if (q5Answer === "1" ) {
        answersRight++;
        writeRight.text(answersRight);
    } else {
        notAnswered++;
        writeUnanswered.text(notAnswered);
    }

    };




    // console.log(answersRight);
    // console.log(answersWrong);


  // };



// calling my functions and associating them with click events

      $(".startbutton").on("click", startGame);

      $(".timerbutton").on("click", startIt);
      

    






     

// });
 



