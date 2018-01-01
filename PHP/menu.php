<?php
$content = "
<a class='btn btn-primary' href='?page=APPS&$TIME'><img src='$SITE/SITE/IMG/APPS.png?$TIME'></a>
<a class='btn btn-primary' href='?page=CONTACTS&$TIME'><img src='$SITE/SITE/IMG/CONTACTS.png?$TIME'></a>
<a class='btn btn-primary' href='?page=BROWSER&$TIME'><img src='$SITE/SITE/IMG/BROWSER.png?$TIME'></a>
<a class='btn btn-primary' href='?page=LANGUAGE&$TIME'><img src='$SITE/SITE/IMG/LANGUAGE.png?$TIME'></a>
";
setInfo('SITE/MENU/','','SITE/IMG/LOGO.png',$content);
echo $PAGE;
?>