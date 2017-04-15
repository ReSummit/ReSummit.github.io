function onLoad() {
	/* This is an example of an alert function
	alert("Function onload() called");*/
	document.getElementById("timestamp").innerHTML = Date();
}
function checkNumber() {
	var theNumber, theMessage;
	
	// Get the value of the input field with id="numb"
    theNumber = ('#smallnumber').val();
	
	// If x is Not a Number or less than one or greater than 10
	if (isNaN(theNumber) || theNumber > -11 && theNumber < 0) {
		theMessage = "Something is here...";
	} else if (isNaN(theNumber) || theNumber == 5) {
		theMessage = "The day I saw the world...";
	} else if (isNaN(theNumber) || theNumber == 0) {
		theMessage = "Nothing. 1/0 is infinity. So is any other number on top of 0. 0 by itself is a complex number indeed...";
	} else if (isNaN(theNumber) || theNumber == 10) {
		theMessage = "My day of birth...";
	} else if (isNaN(theNumber) || theNumber == 100) {
		theMessage = "Our normal age limit... Transcend higher...";
	} else if (isNaN(theNumber) || theNumber > 1 && theNumber < 5) {
		theMessage = "Find more...";
	} else if (isNaN(theNumber) || theNumber > 9999) {
		theMessage = "(ERROR) Exceeding value.";
	} else if (isNaN(theNumber) || theNumber == 1337) {
		theMessage = "Gamer terms."
	}
	else {
		theMessage = "Unauthorized access.";
	}
	('#numberMessage').text(theMessage);
}