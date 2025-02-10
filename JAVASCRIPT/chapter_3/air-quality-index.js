let aqi = 150;

let answer = "";

if (aqi >= 0 && aqi <= 50){
	answer = "Good";
}
else if(aqi >= 101 && aqi <= 150){
	answer = "Moderate";
}
else if (aqi >= 151 && aqi <= 200) {
	answer = "Unhealthy";
}
else if ( aqi >= 201 && aqi <= 300){
	answer = "Very Unhealthy";
}
else
	answer = "Hazardous";

console.log(answer);