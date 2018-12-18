function players(score){
  this.score = score
}
player1 = new players
player1.score = 0
player2 = new players
player2.score = 0





isPlaying = player1

storedPoints1 = 0
storedPoints2 = 0


$(document).ready(function() {
	$("#roll").click(function(){
		dices = Math.floor(Math.random() * (6 - 1)) + 1*1;
		$("#diceoutput").text(dices)
		storedPoints1+=dices


 	if (dices == 1){
    	storedPoints1 = 0
		isPlaying = player2
		alert("uh oh pass your turn")

		}

	});
   $("#pass").click(function(){
   	alert("you pass your turn")
   		player1.score+=storedPoints1
    	storedPoints1 = 0
      	$("#output").text(player1.score)
   	});



	$("#roll2").click(function(){
		dices2 = Math.floor(Math.random() * (6 - 1)) + 1*1;
		$("#diceoutput2").text(dices2)
		storedPoints2+=dices2

	if (dices2 == 1){
		alert("uh oh pass your turn noob")
		storedPoints2 = 0
		isPlaying = player1

	}

		});
	$("#pass2").click(function(){
		alert("you pass your turn")
		player2.score+=storedPoints2
		storedPoints2 = 0
		$("#output2").text(player2.score)
		});

  
	});







