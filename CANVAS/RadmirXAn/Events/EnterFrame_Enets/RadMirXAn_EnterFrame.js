//Номер таймера 1.
let EFtimer;
//Номер таймера 0.

//Текщее время 1.
let time = curretnTime = (new Date()).getTime();
//Текщее время 0.

//Для записи часто выполняющихся функций 1.
let EFlayers = [];//Слои
let EFfunctions = [];//Список всех функций
let EFfunctionLayer = [];//Принадлежность функции к слою
//Для записи часто выполняющихся функций 0.

//Для записи часто выполняющихся функций 1.
function addEF(func, layer){	
	if(layer == undefined){
		layer = 0;
	}
	if(EFfunctions.indexOf(func) == -1){
		EFfunctionLayer.push(layer);
		EFfunctions.push(func);
		if(EFlayers[layer] == undefined){
			EFlayers[layer] = [];
		}
		EFlayers[layer].push(func);	
	}
};
//Для записи часто выполняющихся функций 0.

//Для очитски часто выполняющихся функций 1.
function removeEF(func){
	let index = EFfunctions.indexOf(func);	
	if(index != -1){
		EFfunctions.splice(index, 1);
		let layer = EFfunctionLayer[index];
		let findex = EFlayers[layer].indexOf(func);
		EFlayers[layer].splice(findex, 1);
		EFfunctionLayer.splice(index, 1);
	}
};
//Для очитски часто выполняющихся функций 0.

//Функция для выполнения постоянных задач 1.
let index_layer = 0;
let index_function = 0;
function EF(){
	time = (new Date()).getTime();
	context2D.clearRect(0, 0, canvas.width, canvas.height);
	
	for (index_layer = 0; index_layer < EFlayers.length; index_layer++) {
		if(EFlayers[index_layer] == undefined){
			continue;
		}
		for (index_function = 0; index_function < EFlayers[index_layer].length; index_function++) {
			EFlayers[index_layer][index_function]();
		}
	}
	
	//EFtimer = setTimeout(EF, 0);
	EFtimer = requestAnimationFrame(EF);
};

EF();
//Функция для выполнения постоянных задач 0.

//Запуск постоянных задач 1.
function playEF(){
	EF();
}
//Запуск постоянных задач 0.

//Остановка постоянных задач 1.
function stopEF(){
	//clearTimeout(EFtimer);
	cancelanimationframe(EFtimer);
}
//Остановка постоянных задач 0.