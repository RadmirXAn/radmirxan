<?php
getInfo('SITE/BROWSER/');
$content = "
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
		document.getElementById('info').innerHTML = info;
	}
</script>
";
echo setInfo('','SITE/IMG/BROWSER.png','back',$content);
?>