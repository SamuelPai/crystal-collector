$(document).ready(function() {


function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
var numberGoal = randomIntFromInterval(19,120);
var crystalValues1 = randomIntFromInterval(1,12);
var crystalValues2 = randomIntFromInterval(1,12);
var crystalValues3 = randomIntFromInterval(1,12);
var crystalValues4 = randomIntFromInterval(1,12);



var counter = 0;
var wins = 1;
var losses = 1;

game();

function game() {
    $("#crystalOne").on("click", function(){

        thisValue = crystalValues1
        $("#score2").text(counter += thisValue);
        
     })
     
     
     $("#crystalTwo").on("click", function(){
     
         thisValue = crystalValues2
         $("#score2").text(counter += thisValue);
      
      })
      $("#crystalThree").on("click", function(){
     
         thisValue = crystalValues3
         $("#score2").text(counter += thisValue);
      
      })
      $("#crystalFour").on("click", function(){
     
         thisValue = crystalValues4
         $("#score2").text(counter += thisValue);
      
      })
     
      $("#crystalOne, #crystalTwo, #crystalThree, #crystalFour").on("click", function(){
         
        if (counter === numberGoal){
            $("#resultText").text("You Won!");
            $("#winsCounter").text("Wins: " + wins++);
            //  swal("YOU WON!");
             setTimeout(reset(), 1000);
             
      }
         else if (counter > numberGoal){
             $("#resultText").text("You Lost!!");

             $("#lossCounter").text("Losses: " + losses++);

            //  swal("Sorry, You lost!");
            setTimeout(reset(), 1000);

         }
         }
     
     )
}




$("#numberToHit").text(numberGoal);

function reset(){
    counter = 0;
    numberGoal = randomIntFromInterval(19,120);
    crystalValues1 = randomIntFromInterval(1,12);
    crystalValues2 = randomIntFromInterval(1,12);
    crystalValues3 = randomIntFromInterval(1,12);
    crystalValues4 = randomIntFromInterval(1,12);
    // $("#resultText").html("");
    setTimeout(test, 2000);
    $("#numberToHit").text(numberGoal);
    $("#score2").text(counter);



}

function test (){
    $("#resultText").html("")
}
})