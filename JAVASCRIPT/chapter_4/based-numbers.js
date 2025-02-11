let mynumber = 12;

let binary = "";

while(mynumber != 0)
{
	if (mynumber % 2 == 0)
		binary = "0" + binary;
	else
	binary = "1" + binary;
	mynumber = Math.floor(mynumber / 2);
}

console.log(binary);