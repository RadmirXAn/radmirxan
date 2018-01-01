<?php
$content = "
<a class='btn btn-primary' href='https://vk.com/radmirxan?$TIME'><img src='$SITE/SITE/CONTACTS/IMG/VK.png?$TIME'></a>
<a class='btn btn-primary' href='mailto:rrradmirrr@mail.ru'><img src='$SITE/SITE/CONTACTS/IMG/MAIL.png?$TIME'></a>
<a class='btn btn-primary' href='https://my.mail.ru/mail/rrradmirrr/?$TIME'><img src='$SITE/SITE/CONTACTS/IMG/MYMAIL.png?$TIME'></a>
<a class='btn btn-primary' href='https://www.facebook.com/radmir.jumagugin?$TIME'><img src='$SITE/SITE/CONTACTS/IMG/FB.png?$TIME'></a>
";
setInfo('SITE/CONTACTS/','','SITE/IMG/CONTACTS.png',$content);
echo $PAGE;
?>