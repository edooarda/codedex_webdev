let player = 0;

let computer = Math.floor(Math.random() * 3);

let answer = "";
if (player === 2 && computer === 1)
	answer = "Player";
else if (player === 1 && computer === 0)
	answer = "Player";
else if (player === 0 && computer === 2)
	answer = "Player";
else if (player === 1 && computer === 2)
	answer = "Computer";
else if (player === 0 && computer === 1)
	answer = "Computer";
else if (player === 2 && computer === 0)
	answer = "Computer";

let print = "";

if (player === 0)
	print = "Rock";
else if (player === 1)
	print = "Paper";
else if (player === 2)
	print = "Scissors";
else 
	print = "Error";
console.log("Player picked: " + print);

if (computer === 0)
	print = "Rock";
else if (computer === 1)
	print = "Paper";
else if (computer === 2)
	print = "Scissors";
else 
	print = "Error";
console.log("Computer picked: " + print);

if (answer !== "")
	console.log("The " + answer + " won!");
else
	console.log("It is a Draw");