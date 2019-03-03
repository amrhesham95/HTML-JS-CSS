function myfunction(){
	var textArea=document.getElementById("StringtextField").value;
	var delimiter=document.getElementById("splitter").value;
	var words=textArea.split(delimiter);
	var wordsAsOneString=words.join("\n");
	document.getElementById("textArea").value=wordsAsOneString;
}