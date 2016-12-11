init()
function init() {
    
var wannaPlay = confirm('Do you wanna play?');
while (wannaPlay) {
	startGame();
	wannaPlay = confirm('Do you wanna continue?');
}
}
function startGame() {
var pcChoise = getPcChoise();

while ( pcChoise !== userChoise){
	var userChoise = getUserChoise();
	if ( pcChoise > userChoise){
		alert("Our number is higher than yours =),try again")
	} else if (pcChoise < userChoise) {
		alert("Our number is lower than yours =),try again")
	} else {
		alert("Good job buddy,the number is " + userChoise);
	}
  }
}

	function getPcChoise(){
		var pcNumber = Math.round(Math.random() * 100);
		return pcNumber;
	}

    function getUserChoise(){
    	var userNumber = prompt("Please enter the number from 0 to 100 :", "13");
    	while ( userNumber < 0 || userNumber > 100 || isNaN(userNumber) ) {
    		userNumber = prompt("Please enter the number from 0 to 100 :", "13");
    	}
    	return userNumber;
	}

