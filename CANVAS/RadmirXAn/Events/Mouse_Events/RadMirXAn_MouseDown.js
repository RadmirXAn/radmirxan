//События происходят когда нажимаем кнопку мыши над объектом Canvas.getVisible() 1.
function addMouseDown(func, layer){
	if(layer == undefined){
		layer = 0;
	}
	if(MouseDownfunctions.indexOf(func) == -1){
		MouseDownfunctionsLayer.push(layer);
		MouseDownfunctions.push(func);
		if(MouseDownlayers[layer] == undefined){
			MouseDownlayers[layer] = [];
		}
		MouseDownlayers[layer].push(func);	
	}
}

function removeMouseDown(func){
	let index = MouseDownfunctions.indexOf(func);
	if(index != -1){
		MouseDownfunctions.splice(index, 1);
		let layer = MouseDownfunctionsLayer[index];
		let findex = MouseDownlayers[layer].indexOf(func);
		MouseDownlayers[layer].splice(findex, 1);
		MouseDownfunctionsLayer.splice(index, 1);
	}
}

function onMouseDown(eventData){
	stoppropagation = false;
	for (index_onMouseDown_layer = MouseDownlayers.length-1; index_onMouseDown_layer > -1; index_onMouseDown_layer--) {
		if(MouseDownlayers[index_onMouseDown_layer] == undefined){
			continue;
		}
		for (index_onMouseDown_function = 0; index_onMouseDown_function < MouseDownlayers[index_onMouseDown_layer].length; index_onMouseDown_function++) {
			MouseDownlayers[index_onMouseDown_layer][index_onMouseDown_function](eventData);
			if(stoppropagation){
				return;
			}
		}
	}
}

Canvas.getVisible().onmousedown = onMouseDown;
//События происходят когда нажимаем кнопку мыши над объектом Canvas.getVisible() 0.