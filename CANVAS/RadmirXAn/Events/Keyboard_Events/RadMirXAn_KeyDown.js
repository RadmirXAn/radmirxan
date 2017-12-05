//События происходят когда нажата клавиша на клавиатуре 1.
function addKeyDown(func){
	if(KeyDownfunctions.indexOf(func) == -1){
		KeyDownfunctions.push(func);
	}
}

function removeKeyDown(func){
	let index = KeyDownfunctions.indexOf(func);
	if(index != -1){
		KeyDownfunctions.splice(index, 1);
	}
}

function onKeyDown(eventData){
	console.log('onKeyDown keyCode=' + eventData.keyCode);
	keyCode[eventData.keyCode]=true;
	KeyDownfunctions.forEach(
		function(item, index, array) {
			item(eventData);
		}
	);
}

document.onkeydown = onKeyDown;
//События происходят когда нажата клавиша на клавиатуре 0.