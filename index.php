<?php
	//$SITE = "http://localhost/";
	$SITE = "https://www.radmirxan.ru/";
	switch(@$_GET['page']){
		case "GAMES":{
			if(@$_GET['game']!=''){
				include_once('PHP/game.php');
			}else{
				include_once('PHP/games.php');
			}
			break;
		};
		case "CONTACTS":{include_once('PHP/contacts.php');break;};
		case "ERROR":{include_once('PHP/error.php');break;};
		default:{include_once('PHP/menu.php');};
	};
	exit;
?>