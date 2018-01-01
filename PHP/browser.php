<?php
$content = "
<canvas id='game' width='0' height='0'>
	<p>Canvas: <white>Браузер не поддерживает рисование.</white></p>
</canvas>

<noscript>
	<p>JavaScript: <white>Заблокирован или не поддерживается браузером.</white></p>
</noscript>
";
setInfo('SITE/BROWSER/','','SITE/IMG/BROWSER.png',$content);
echo $PAGE;
?>