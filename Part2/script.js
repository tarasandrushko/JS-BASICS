var x1 = 7
var y1 = 4
var x2 = prompt("Set your number for x2", "2");
var y2 = prompt("Set your number for y2", "3");
var math = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)); //Формула для обчислення відстані між двома точками
alert("The distance between point A(7,4) and B("+ x2 +"," + y2 +") is " + math);
