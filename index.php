<?php
	$TIME = "time=".time();
	//$SITE = "http://localhost/";
	$SITE = "https://www.radmirxan.ru/";
	$LIB = $SITE."LIB/RadmirXAn/Utils/ClassLoader/ClassLoader.js?".$TIME;
	
	$DEFAULT = "
			<meta charset=\"utf-8\">
			<meta name=\"description\" content=\"RadMirXAn\">
			<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">
			<meta name=\"author\" content=\"RadMirXAn\">
			<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />
			
			<title>RadMirXAn</title>
			
			<link rel=\"shortcut icon\" href=\"./SITE/IMG/LOGO.png?$TIME\" type=\"image/png\">		
			<link rel=\"stylesheet\" href=\"./SITE/CSS/BG.css?$TIME\">";
	
	switch(@$_GET['page']){
		case "GAMES":{
			if(@$_GET["game"]!=''){
				include_once("PHP/game.php");
			}else{
				include_once("PHP/games.php");
			}
			break;
		};
		case "CONTACTS":{include_once("PHP/contacts.php");break;};
		case "BROWSER":{include_once("PHP/browser.php");break;};
		case "ERROR":{include_once("PHP/error.php");break;};
		default:{include_once("PHP/menu.php");};
	};
	exit;
?>