<?php
getInfo('SITE/BROWSER/');
$Сontent = "
<canvas id='game' width='0' height='0'>
	<p>Canvas: <white>undefined</white></p>
</canvas>

<noscript>
	<p>JavaScript: <white>undefined</white></p>
</noscript>

<div id=\"info\"></div>

<script type='application/javascript'>
	window.onload = function() {
		let info = '';
		let element = document.getElementById('game');
		//---
		if(!(element.requestFullscreen)){
			info += '<p>element: <white>requestFullscreen</white></p>';
		}
		//---
		if(!(element.mozRequestFullScreen)){
			info += '<p>element: <white>mozRequestFullScreen</white></p>';
		}
		//---
		if(!(element.webkitRequestFullScreen)){
			info += '<p>element: <white>webkitRequestFullScreen</white></p>';
		}
		//---
		if(!(element.msRequestFullscreen)){
			info += '<p>element: <white>msRequestFullscreen</white></p>';
		}
		//---
		if(typeof XMLHttpRequest === 'undefined'){
			info += '<p>XMLHttpRequest: <white>undefined</white></p>';
		}
		//---
		if(!window.AudioContext){
			info += '<p>window: <white>AudioContext</white></p>';
		}
		//---
		if(!window.webkitAudioContext){
			info += '<p>window: <white>webkitAudioContext</white></p>';
		}
		//---
		document.getElementById('info').innerHTML = info;
	}
</script>
";
$Back_CAPACITION = "back";
$Back_IMG = "SITE/IMG/BROWSER.png";
echo setInfo();
?>