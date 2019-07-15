function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
var numberGoal = randomIntFromInterval(19,120);
$("#numberToHit").html(numberGoal);

var crystalValues = randomIntFromInterval(1,12);
var counter;

$("#crystalOne").on("click", function(){
   thisValue = crystalValues
   $("#score2").text(thisValue);

})