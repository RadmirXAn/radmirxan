const Keyboard = (function(){
	function Keyboard_Action() {
		let current = this;
		console.log('Keyboard: --------------------------------- init');
		let Keyboard_KeyCode = [];
		current.getKeyCodeStatus = function(Keyboard_Code){
			return Keyboard_KeyCode[Keyboard_Code];
		}
		let Keyboard_KeyDownFunctions = [];
		let Keyboard_KeyUpFunctions = [];
		current.addKeyDownFunction = function(Keyboard_Functions){
			if(Keyboard_KeyDownFunctions.indexOf(Keyboard_Functions) == -1){
				Keyboard_KeyDownFunctions.push(Keyboard_Functions);
			}
		}
		current.removeKeyDownFunction = function(Keyboard_Functions){
			let Keyboard_Index = Keyboard_KeyDownFunctions.indexOf(Keyboard_Functions);
			if(Keyboard_Index != -1){
				Keyboard_KeyDownFunctions.splice(Keyboard_Index, 1);
			}
		}
		let Keyboard_OnKeyDown = function(Keyboard_Event){
			console.log('Keyboard: OnKeyDown = ' + Keyboard_Event.keyCode);
			Keyboard_KeyCode[Keyboard_Event.keyCode]=true;
			Keyboard_KeyDownFunctions.forEach(
				function(Keyboard_Item, Keyboard_Index, Keyboard_Array) {
					Keyboard_Item(Keyboard_Event);
				}
			);
		}
		document.onkeydown = Keyboard_OnKeyDown;
		current.addKeyUpFunction = function(Keyboard_Functions){
			if(Keyboard_KeyUpFunctions.indexOf(Keyboard_Functions) == -1){
				Keyboard_KeyUpFunctions.push(Keyboard_Functions);
			}
		}
		current.removeKeyUpFunction = function(Keyboard_Functions){
			let Keyboard_Index = Keyboard_KeyUpFunctions.indexOf(Keyboard_Functions);
			if(Keyboard_Index != -1){
				Keyboard_KeyUpFunctions.splice(Keyboard_Index, 1);
			}
		}
		let Keyboard_OnKeyUp = function(Keyboard_Event){
			Keyboard_KeyCode[Keyboard_Event.keyCode]=false;
			Keyboard_KeyUpFunctions.forEach(
				function(Keyboard_Item, Keyboard_Index, Keyboard_Array) {
					Keyboard_Item(Keyboard_Event);
				}
			);
		}
		document.onkeyup = Keyboard_OnKeyUp;
	}
	return new Keyboard_Action();
})();