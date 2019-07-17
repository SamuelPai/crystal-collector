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





var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);
  
  Resources