var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gA = 0;
var gB = 0;
var gC = 0;
var gD = 0;
var gF = 0;

var highestNum = 0;
var lowestNum = 100;

for (var i = 0; i < scores.length; i++) {
	if ((scores[i] >= 50) && (scores[i] <= 60)) {
		gF += 1;
	} else if ((scores[i] >= 61) && (scores[i] <= 70)) {
		gD += 1;
	} else if ((scores[i] >= 71) && (scores[i] <= 80)){
		gC += 1;
	} else if ((scores[i] >= 81) && (scores[i] <= 90)) {
		gB += 1;
	} else if ((scores[i] >= 91) && (scores[i] <= 100)) {
		gA += 1;
	}
}

for (var i = 0; i < scores.length; i++) {
	if (scores[i] > highestNum) {
		highestNum = scores[i];
	} else if (scores[i] < lowestNum) {
		lowestNum = scores[i];
	}
}



console.log("The number of A's: ", + gA);
console.log("The number of B's: ", + gB);
console.log("The number of C's: ", + gC);
console.log("The number of D's: ", + gD);
console.log("The number of F's: ", + gF);

console.log("The highest grade: ", highestNum);
console.log("The lowest grade: ", lowestNum);