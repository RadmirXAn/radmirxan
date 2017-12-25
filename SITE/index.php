<?php
	if($_SERVER['HTTPS']){
		header('Location: '.'https://'.$_SERVER['SERVER_NAME']);
	}else{
		header('Location: '.'http://'.$_SERVER['SERVER_NAME']);
	}	
	exit;
?>