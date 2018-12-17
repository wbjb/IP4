function players(score){
  this.score = score
}
player1 = new players
player1.score = 0
player2 = new players
player2.score = 0




var cmpttrs = [player1, player2]
isPlaying = cmpttrs[0]

storedPoints1 = 0
storedPoints2 = 0
console.log(toString(isPlaying))


$(document).ready(function() {
	if (isPlaying == player1){
		$("#roll").click(function(){
			dices = Math.floor(Math.random() * (6 - 1)) + 1*1;
    	alert(dices)
			storedPoints1=storedPoints1+dices

	});
   $("#pass").click(function(){
   		player1.score+=storedPoints1
    	storedPoints1 = 0
      isPlaying = player2
   	});
	 if (dices == 1){
    storedPoints1-=1
			isPlaying = player2
			console.log("uh oh pass your turn noob")

		}
	}
  
	});

	$("#plr1").click(function(){
		alert(player1.score)
	});
	$("#plr2").click(function(){
		alert(player2.score)
	});







function players(score){
  this.score = score
}
player1 = new players
player1.score = 0
player2 = new players
player2.score = 0




var cmpttrs = [player1, player2]
isPlaying = cmpttrs[0]

storedPoints1 = 0
storedPoints2 = 0
console.log(toString(isPlaying))


$(document).ready(function() {
	if (isPlaying == player1){
		$("#roll").click(function(){
			dices = Math.floor(Math.random() * (6 - 1)) + 1*1;
    	alert(dices)
			storedPoints1=storedPoints1+dices

	});
   $("#pass").click(function(){
   		player1.score+=storedPoints1
    	storedPoints1 = 0
      isPlaying = player2
   	});
	 if (dices == 1){
    storedPoints1-=1
			isPlaying = player2
			console.log("uh oh pass your turn noob")

		}
	}
  
	});

	$("#plr1").click(function(){
		alert(player1.score)
	});
	$("#plr2").click(function(){
		alert(player2.score)
	});







