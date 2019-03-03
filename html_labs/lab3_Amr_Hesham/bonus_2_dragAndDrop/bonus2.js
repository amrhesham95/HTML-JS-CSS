
function doFirst(){
	pic=document.getElementById("picId");
	pic.addEventListener("dragstart",startDrag,false);
	var leftBox=document.getElementById("leftBox");
	leftBox.addEventListener("dragenter",function(e){e.preventDefault();},false);
	leftBox.addEventListener("dragover",function(e){e.preventDefault();},false);
	leftBox.addEventListener("drop",dropped,false);
}

function startDrag(e){
	var code='<img src="icon.png">';
	e.dataTransfer.setData('Text',code); 
}

function dropped(e){
	e.preventDefault();
	leftBox.innerHTML=e.dataTransfer.getData('Text');
}




window.addEventListener("load",doFirst,false);