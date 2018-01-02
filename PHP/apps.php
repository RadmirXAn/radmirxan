<?php
getInfo('SITE/APPS/');
$btn_1 = createButton('page=APPS&app=0','SITE/APPS/IMG/0.png','memorian');
$content = "$btn_1";
echo setInfo('','SITE/IMG/APPS.png','back',$content);
?>