var myNum = 36

var numCheck = function(numGuess) {
    if (numGuess === myNum) {
        return "You guessed " + numGuess + "; good guess!";
    } else if (numGuess > myNum) {
        return "You guessed " + numGuess + "; too big!";
    } else if (numGuess < myNum) {
        return "You guessed " + numGuess + "; too small!";
    }
};

console.log(numCheck(28));
console.log(numCheck(40));
console.log(numCheck(36));


var numCheck = function(numGuess) {
	return "You guessd " + numGuess + "; " + 
	if (numGuess === myNum)  {
		return "good guess!";
	} else if (numGuess < myNum) {
		return "too small!";
	} else if (numGuess > myNum) {
		return "too big!";
	}
};