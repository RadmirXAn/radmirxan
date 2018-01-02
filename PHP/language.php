<?php
getInfo('SITE/LANGUAGE/');
$btn_1 = createButton('page=LANGUAGE&language=RU','SITE/LANGUAGE/IMG/RU.png','language_ru');
$btn_2 = createButton('page=LANGUAGE&language=BA','SITE/LANGUAGE/IMG/BA.png','language_ba');
$btn_3 = createButton('page=LANGUAGE&language=EN','SITE/LANGUAGE/IMG/EN.png','language_en');
$content = "$btn_1$btn_2$btn_3";
echo setInfo('', 'SITE/IMG/LANGUAGE.png','back',$content);
?>