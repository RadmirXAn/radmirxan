<?php
getInfo('SITE/BROWSER/');
$content = "
<canvas id='game' width='0' height='0'>
	<p>Canvas: <white>Браузер не поддерживает рисование.</white></p>
</canvas>

<noscript>
	<p>JavaScript: <white>Заблокирован или не поддерживается браузером.</white></p>
</noscript>
";
echo setInfo('','SITE/IMG/BROWSER.png','back',$content);
?>