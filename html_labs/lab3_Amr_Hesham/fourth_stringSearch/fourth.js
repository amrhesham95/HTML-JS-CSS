function myfunction(){
	var textArea=document.getElementById("textArea").value;
	var textField=document.getElementById("subStringtextField").value;
	var firstOcc=textArea.indexOf(textField);
	var lastOcc=textArea.lastIndexOf(textField);
	document.getElementById("firstArea").value=firstOcc;
	document.getElementById("lastArea").value=lastOcc;

	var startIndex=document.getElementById("atIndex").value;
	document.getElementById("firstLocatedArea").value=textArea.indexOf(textField,startIndex);
	document.getElementById("lastLocatedArea").value=textArea.lastIndexOf(textField,startIndex);
}