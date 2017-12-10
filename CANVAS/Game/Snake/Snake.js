function  Snake(layer) {
	let	_points = [];
	let _pause = false;
	
	this.drawCross = function (x, y){
		Canvas.getVisibleContext().beginPath();

		Canvas.getVisibleContext().moveTo(-50+x, 0+y);
		Canvas.getVisibleContext().lineTo(50+x, 0+y);

		Canvas.getVisibleContext().moveTo(0+x, -50+y);
		Canvas.getVisibleContext().lineTo(0+x, 50+y);

		Canvas.getVisibleContext().stroke();
	}.bind(this);

	this.onMouseDown = function(eventData){
		switch(eventData.which){
			case 1:{
				//console.log('onMouseDown левая кнопка');
				_pause = true;				
				break;
			}
			case 2:{
				//console.log('onMouseDown средняя кнопка');
				this.stop();
				break;
			}
			case 3:{
				//console.log('onMouseDown правая кнопка');
				this.start();
				_pause = false;
				break;
			}
		}		
	}.bind(this);

	this.onMouseMove = function(eventData){
		_points.push({x:Mouse.getX(), y:Mouse.getY()});
		if(_points.length>50){
			_points.shift();
		}	
	}.bind(this);	
	
	this.test = function(item, index, array) {
			this.drawCross(item.x, item.y);
	}.bind(this);	
	
	this.enterFrame = function(){
		if(_pause){
			_points.push({x:Mouse.getX(), y:Mouse.getY()});
			if(_points.length>100){
				_points.shift();
			}
		}
		_points.forEach(this.test);
	}.bind(this);	
	
	this.start = function (){	
		Mouse.addMoveFunction(this.onMouseMove);
		Mouse.addDownFunction(this.onMouseDown);
		EnterFrame.addFunction(this.enterFrame, layer);
	}.bind(this);

	this.stop = function (){
		Mouse.removeMoveFunction(this.onMouseMove);
		Mouse.removeDownFunction(this.onMouseDown);
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
	
	this.start();
}