<?php
getInfo('SITE/MENU/');
$btn_1 = createButton('page=APPS','SITE/IMG/APPS.png','applications');
$btn_2 = createButton('page=CONTACTS','SITE/IMG/CONTACTS.png','cantacts');
$btn_3 = createButton('page=BROWSER&','SITE/IMG/BROWSER.png','browser');
$btn_4 = createButton('page=LANGUAGE','SITE/IMG/LANGUAGE.png','language');
$content = "$btn_1$btn_2$btn_3$btn_4";
echo setInfo('','SITE/IMG/LOGO.png','',$content);
?>