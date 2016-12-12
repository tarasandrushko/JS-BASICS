var wannaPlay = confirm('Do you wanna play?');
var pcChoise = getPcChoise();

while (pcChoise !== userChoise) {
    var userChoise = getUserChoise();
    if (pcChoise > userChoise) {
        alert("Our number is higher than yours =),try again")
    } else if (pcChoise < userChoise) {
        alert("Our number is lower than yours =),try again")
    } else if (pcChoise == userChoise) {
        alert("Good job buddy,the number is " + userChoise);
    } else {
        break;
    }
}


function getPcChoise() {
    var pcNumber = Math.round(Math.random() * 100);
    return pcNumber;
}

function getUserChoise() {
    var userNumber = parseInt(prompt("Please enter the number from 0 to 100 :", "13"));
    while (userNumber < 0 || userNumber > 100) {
        userNumber = parseInt(prompt("Please enter the number from 0 to 100 :", "13"));
    }
    return userNumber;
}
