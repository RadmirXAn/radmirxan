//События происходят когда выводим контекстное меню на объектом Canvas.getVisible() 1.
function onContextMenu(eventData){
	return false;
}
Canvas.getVisible().oncontextmenu = onContextMenu;
//События происходят когда выводим контекстное меню на объектом Canvas.getVisible() 0.