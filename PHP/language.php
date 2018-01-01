<?php
$content = "
<a class='btn btn-primary' href='?page=LANGUAGE&language=BA&$TIME'><img src='$SITE/SITE/LANGUAGE/IMG/BA.png?$TIME'></a>
<a class='btn btn-primary' href='?page=LANGUAGE&language=RU&$TIME'><img src='$SITE/SITE/LANGUAGE/IMG/RU.png?$TIME'></a>
<a class='btn btn-primary' href='?page=LANGUAGE&language=EN&$TIME'><img src='$SITE/SITE/LANGUAGE/IMG/EN.png?$TIME'></a>
";
setInfo('SITE/LANGUAGE/', '', 'SITE/IMG/LANGUAGE.png',$content);
echo $PAGE;
?>