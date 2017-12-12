
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  $('#comNumber').text(Random);

  var crystalNum1= Math.floor(Math.random()*11+1)
  var crystalNum2= Math.floor(Math.random()*11+1)
  var crystalNum3= Math.floor(Math.random()*11+1)
  var crystalNum4= Math.floor(Math.random()*11+1)

  var Scorebox= 0; 
  var wins= 0;
  var losses = 0;

$('#numWin').text(wins);
$('#numLose').text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#comNumber').text(Random);
      crystalNum1= Math.floor(Math.random()*11+1);
      crystalNum2= Math.floor(Math.random()*11+1);
      crystalNum3= Math.floor(Math.random()*11+1);
      crystalNum4= Math.floor(Math.random()*11+1);
      Scorebox= 0;
      $('#Score').text(Scorebox);
      } 

function yay(){
alert("You got a Crystal!");
  wins++; 
  $('#numWin').text(wins);
  reset();
}

function loser(){
alert ("You lost Crystal!");
  losses++;
  $('#numLose').text(losses);
  reset()
}

  $('#imgone').on ('click', function(){
    Scorebox = Scorebox + crystalNum1;
    console.log("New Scorebox= " + Scorebox);
    $('#Score').text(Scorebox); 
       
        if (Scorebox == Random){
          yay();
        }
        else if (Scorebox > Random){
          loser();
        }   
  })  
  $('#imgtwo').on ('click', function(){
    Scorebox = Scorebox + crystalNum2;
    console.log("New Scorebox= " + Scorebox);
    $('#Score').text(Scorebox); 
        if (Scorebox == Random){
          yay();
        }
        else if (Scorebox > Random){
          loser();
        } 
  })  
  $('#imgthree').on ('click', function(){
    Scorebox = Scorebox + crystalNum3;
    console.log("New Scorebox= " + Scorebox);
    $('#Score').text(Scorebox);

          if (Scorebox == Random){
          yay();
        }
        else if (Scorebox > Random){
          loser();
        } 
  })  
  $('#imgfour').on ('click', function(){
    Scorebox = Scorebox + crystalNum4;
    console.log("New Scorebox= " + Scorebox);
    $('#Score').text(Scorebox); 
      
          if (Scorebox == Random){
          yay();
        }
        else if (Scorebox > Random){
          loser();
        }
  });   
}); 