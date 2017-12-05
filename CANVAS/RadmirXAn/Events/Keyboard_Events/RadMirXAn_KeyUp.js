//События происходят когда отжата клавиша на клавиатуре 1.
function addKeyUp(func){
	if(KeyUpfunctions.indexOf(func) == -1){
		KeyUpfunctions.push(func);
	}
}

function removeKeyUp(func){
	let index = KeyUpfunctions.indexOf(func);
	if(index != -1){
		KeyUpfunctions.splice(index, 1);
	}
}

function onKeyUp(eventData){
	keyCode[eventData.keyCode]=false;
	KeyUpfunctions.forEach(
		function(item, index, array) {
			item(eventData);
		}
	);
}

document.onkeyup = onKeyUp;
//События происходят когда отжата клавиша на клавиатуре 0.