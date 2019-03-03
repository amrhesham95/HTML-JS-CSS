var i =1;
document.write("<table>");
for (i; i < 11; i++) {
	document.write("<tr>");

	
		document.write("<td  style='border: 1px solid black;'>"+i+"</td>");
		document.write("<td  style='border: 1px solid black;'>"+getfactorial(i)+"</td>");
document.write("</tr>");	
}
	
document.write("</table");

function getfactorial(n){
	if(n<0)return;
	else if (n===1) return 1;
	else return n*getfactorial(n-1);
}

function buttonFunction(){
	do{
		var input=prompt("enter number");
	}while(isNaN(input));
	alert(getfactorial(input));
}