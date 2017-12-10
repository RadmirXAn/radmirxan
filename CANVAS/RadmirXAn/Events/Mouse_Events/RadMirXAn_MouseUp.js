//События происходят когда отжимаем кнопку мыши над объектом Canvas.getVisible() 1.
function addMouseUp(func, layer){
	if(layer == undefined){
		layer = 0;
	}
	if(MouseUpfunctions.indexOf(func) == -1){
		MouseUpfunctionsLayer.push(layer);
		MouseUpfunctions.push(func);
		if(MouseUplayers[layer] == undefined){
			MouseUplayers[layer] = [];
		}
		MouseUplayers[layer].push(func);	
	}
}

function removeMouseUp(func){	
	let index = MouseUpfunctions.indexOf(func);
	if(index != -1){
		MouseUpfunctions.splice(index, 1);
		let layer = MouseUpfunctionsLayer[index];
		let findex = MouseUplayers[layer].indexOf(func);
		MouseUplayers[layer].splice(findex, 1);
		MouseUpfunctionsLayer.splice(index, 1);
	}
}

function onMouseUp(eventData){
	stoppropagation = false;
	for (index_onMouseUp_layer = MouseUplayers.length-1; index_onMouseUp_layer > -1; index_onMouseUp_layer--) {
		if(MouseUplayers[index_onMouseUp_layer] == undefined){
			continue;
		}
		for (index_onMouseUP_function = 0; index_onMouseUP_function < MouseUplayers[index_onMouseUp_layer].length; index_onMouseUP_function++) {
			MouseUplayers[index_onMouseUp_layer][index_onMouseUP_function](eventData);
			if(stoppropagation){
				return;
			}
		}
	}
}

Canvas.getVisible().onmouseup = onMouseUp;
//События происходят когда отжимаем кнопку мыши над объектом Canvas.getVisible() 0.