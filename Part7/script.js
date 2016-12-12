init();
// Main function
function init() {

    var task1 = confirm("Do you want to play the game?");
    startgame();
// Startgame
    function startgame() {
        var UserWon = 0;
        if (task1) {
            var PcNumber = Math.round(Math.random() * 5);
            var UserChoice = prompt("Enter number from 0 to 5", "0");

            if (UserChoice == PcNumber) {
                alert("You won 10$");
                UserWon = 10;
            } else if (UserChoice !== PcNumber) {
                var UserChoice2 = prompt("Enter number from 0 to 5", "0");

                if (UserChoice2 == PcNumber) {
                    alert("You won 5$");
                    UserWon = 5;
                } else if (UserChoice2 !== PcNumber) {
                    var UserChoice3 = prompt("Enter number from 0 to 5", "0");

                    if (UserChoice3 == PcNumber) {
                        alert("You won 2$");
                        UserWon = 2;
                    } else {
                        alert("You won 0, the number was " + PcNumber);
                    }
                }
            }
            var task2 = confirm("Do you wanna play one more time?");
            	var at1 = 10;
            	var at2 = 5;
            	var at3 = 2;
            	var summ1 = 0;
            	var summ2 = 0;
           	  var summ3 = 0;
            	var att1 = at1 * 3;
           	  var att2 = at2 * 3;
           	  var att3 = at3 * 3;
           	  // Second part of a game.
            while (task2) {
                var PcNumber = Math.round(Math.random() * 10);
                var UserChoice = prompt("Enter number from 0 to 10", "0");

                if (UserChoice == PcNumber) {
                    alert("You won " + att1 + "$");
                    summ1 += att1;
                } else if (UserChoice !== PcNumber) {
                    var UserChoice2 = prompt("Enter number from 0 to 10", "0");

                    if (UserChoice2 == PcNumber) {
                        alert("You won " + att2 + "$");
                        summ2 += att2;
                    } else if (UserChoice2 !== PcNumber) {
                        var UserChoice3 = prompt("Enter number from 0 to 10", "0");

                        if (UserChoice3 == PcNumber) {
                            alert("You won " + att3 + "$");
                            summ3 += att3;
                        } else {
                            alert("You won 0, the number was " + PcNumber);
                        }
                    }
                }
                var task2 = confirm("Do you wanna play the game again?");
            }
            // Calculating sum
            var sum = 0;
            sum = UserWon + summ1 + summ2 + summ3;
            alert("Thanks for the game! You just won " + sum + "$");
        	// If user clicks Cancel
        } else {
            alert("Today you will not win the jackpot, but you could");
        }
    }
}
