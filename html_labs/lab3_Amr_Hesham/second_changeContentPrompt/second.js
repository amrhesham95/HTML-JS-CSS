var input=prompt('Enter a number','')
if(input=="1"){
	
	document.write("<ul><li> item 1 </li><li> item 2 </li><li> item 3 </li></ul>");
	
}

else if(input=="2"){
	document.write("<ol><li> item 1 </li><li> item 2 </li><li> item 3 </li></ol>");
}

else if (input=="3"){
	document.write("<ol type='A'><li> item 1 </li><li> item 2 </li><li> item 3 </li></ol>");
}

else{
	alert("refresh and enter 1 or 2 or 3");
}