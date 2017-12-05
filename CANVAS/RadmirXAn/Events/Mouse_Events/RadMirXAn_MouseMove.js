//События происходят когда водим курсором мыши по объекту Canvas 1.
function addMouseMove(func){
	if(MouseMovefunctions.indexOf(func) == -1){
		MouseMovefunctions.push(func);
	}
}

function removeMouseMove(func){
	let index = MouseMovefunctions.indexOf(func);
	if(index != -1){
		MouseMovefunctions.splice(index, 1);
	}
}

function onMouseMove(eventData){
	let rect = canvas.getBoundingClientRect();
	mouseX = eventData.clientX - rect.left;
	mouseY = eventData.clientY - rect.top;
	MouseMovefunctions.forEach(
		function(item, index, array) {
			item(eventData);
		}
	);
}

canvas.onmousemove = onMouseMove;
//События происходят когда водим курсором мыши по объекту Canvas 0.