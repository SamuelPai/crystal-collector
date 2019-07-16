$(document).ready(function() {


function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
var numberGoal = randomIntFromInterval(19,120);
console.log(numberGoal);
var crystalValues1 = randomIntFromInterval(1,12);
var crystalValues2 = randomIntFromInterval(1,12);
var crystalValues3 = randomIntFromInterval(1,12);
var crystalValues4 = randomIntFromInterval(1,12);



var counter = 0;
var wins = 1;
var losses = 1;



function game() {
// this is where the game functionality . past on click functions
}

function reset(){
    counter = 0;
    numberGoal = randomIntFromInterval(19,120);
    $("#resultText").html("");
    $("#numberToHit").text(numberGoal);
    $("#score2").text(counter);



}

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
        $("#winsCounter").text("Wins: " + wins++);
        $("#resultText").text("You Won!");
        
 }
    else if (counter > numberGoal){
        $("#lossCounter").text("Losses: " + losses++);
        $("#resultText").text("You Lost!!");
        reset();
    }
    }

)
$("#numberToHit").text(numberGoal);

})