<?php
$content = "
<a class='btn btn-primary' href='?page=APPS&app=0&$TIME'><img src='$SITE/SITE/APPS/IMG/0.png?$TIME'></a>
";
setInfo('SITE/APPS/','','SITE/IMG/APPS.png',$content);
echo $PAGE;
?>