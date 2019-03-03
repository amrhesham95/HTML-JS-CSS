do{
	var firstNumber=prompt("enter first number");
}while(isNaN(firstNumber));

	do {
		var secondNumber=prompt("enter second number");
	}while(isNaN(secondNumber));
	
	do{
		var thirdNumber=prompt("enter third number");
	}while(isNaN(thirdNumber));


document.write("<p>First Number="+firstNumber+"</p>");
document.write("<p>Second Number="+secondNumber+"</p>");
document.write("<p>Third Number="+thirdNumber+"</p>");

document.write("<p>Max Number="+Math.max(firstNumber,secondNumber,thirdNumber)+"</p>");
document.write("<p>min	 Number="+Math.min(firstNumber,secondNumber,thirdNumber)+"</p>");
