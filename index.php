<?php
	switch(@$_GET['page']){
		case "GAMES":{
			if(@$_GET['game']!=''){
				include_once('SITE/game.php');
			}else{
				include_once('SITE/GAMES/index.php');
			}
			break;
		};
		case "CONTACTS":{include_once('SITE/CONTACTS/index.php');break;};
		default:{include_once('SITE/index.php');};
	};
	exit;
?>