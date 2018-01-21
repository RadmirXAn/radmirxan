<?php
	session_start();
	if (!isset($_SESSION['language'])) {
	  $_SESSION['language'] = 'RU';
	}

	$TIME = "time=".time();
	$ROOT = "./";
	//$SITE = "http://localhost/";
	//$SITE = "http://localhost:8080/MySite/";
	$SITE = "http://radmirxan.ru/";
	
	if(@$_SERVER['HTTPS']){
		$SITE = "https://radmirxan.ru/";
	}
	$ALTERNATE = $SITE;
	
		
	$Title = "RadMirXAn.RU";
	$Description = "RadMirXAn";
	
	switch(@$_GET['language']){
		case "BA":{$_SESSION['language'] = 'BA';break;};
		case "RU":{$_SESSION['language'] = 'RU';break;};
		case "EN":{$_SESSION['language'] = 'EN';break;};
	}
	
	$LANGUAGE = $_SESSION['language'];
	$InfoXml;
	
	function getInfo($path){
		global $ROOT, $Title, $Description, $SITE, $TIME, $LANGUAGE, $InfoXml;
		$infoURL = $ROOT.$path."INFO/info_".$LANGUAGE.".xml";

		if (file_exists($infoURL)) {
			$InfoXml = simplexml_load_file($infoURL);
		} else {
			$InfoXml = simplexml_load_file($ROOT."SITE/DEFAULT/INFO/info_".$LANGUAGE.".xml");
		}
	}

	$Back_URL = "";
	$Back_IMG = "";
	$Back_CAPACITION = "";
	$Сontent = "";
	$OG_Image = "SITE/IMG/SHARE.png";	
	$Scripts = "";
	
	$OnLoadAction = "contentWidth = content.offsetWidth;contentHeight = content.offsetHeight;onResize();";
	$OnResizeAction = "windowHeight = window.innerHeight;windowWidth = window.innerWidth;if(windowHeight>contentHeight){content.style.top = (windowHeight-contentHeight)/2+'px';}else{content.style.top = '0px';}if(windowWidth>contentWidth){content.style.left = (windowWidth-contentWidth)/2+'px';}else{content.style.left = '0px';}";

	function setInfo(){
		global $Scripts, $ROOT, $Title, $Description, $SITE, $TIME, $InfoXml, $ALTERNATE, $Back_URL, $Back_IMG, $Back_CAPACITION, $Сontent, $OG_Image, $OnLoadAction, $OnResizeAction;
		
		$Title = $InfoXml->title;
		$Description = $InfoXml->description;
		
		$btn_1 = createButton($Back_URL,$Back_IMG,$Back_CAPACITION);
		
		$PAGE = "
		<!DOCTYPE html>
		<html>
		
		<head>
		
		<meta charset=\"utf-8\">
		<meta name=\"description\" content=\"RadMirXAn\">
		<meta name=\"keywords\" content=\"RadMirXAn,HTML,CSS,XML,JavaScript\">
		<meta name=\"author\" content=\"RadMirXAn\">
		
		<meta property=\"og:image\" content=\"http://radmirxan.ru/$OG_Image\" />
		<meta property=\"og:image:secure_url\" content=\"https://radmirxan.ru/$OG_Image\" />
		<meta property=\"og:image:type\" content=\"image/png\" />
		<meta property=\"og:image:width\" content=\"800\" />
		<meta property=\"og:image:height\" content=\"480\" />
		
		<meta name=\"viewport\" content=\"maximum-scale=1\">
	
		<title>$Title</title>
		
		<link rel=\"icon\" href=\"./SITE/IMG/LOGO.png?$TIME\" type=\"image/png\">		
		<link rel=\"stylesheet\" href=\"./SITE/CSS/BG.css?$TIME\">
		<link rel=\"alternate\" hreflang=\"x-default\" href=\"$SITE\" />
		<link rel=\"alternate\" hreflang=\"ba\" href=\"$ALTERNATE"."language=BA\" />
		<link rel=\"alternate\" hreflang=\"ru\" href=\"$ALTERNATE"."language=RU\" />
		<link rel=\"alternate\" hreflang=\"en-us\" href=\"$ALTERNATE"."language=EN\" />
		
		$Scripts
		
		</head>
		
		<body onresize=\"onResize()\">			
		<div id='page' class='page'>
		<div class='head'>
		$btn_1
		<div class='title'>
		<h1>$Title</h1>
		<b>$Description</b>
		</div>
		</div>
		
		<hr>
		<div class='content'>
		$Сontent
		</div>			
		</div>
		
		<script>
		var content = document.getElementById('page');
		var contentWidth = 0;
		var contentHeight = 0;
		var windowHeight = 0;
		var windowWidth = 0;
		function onResize(){
		$OnResizeAction
		}
		function pageLoaded(){
		$OnLoadAction
		}
		document.addEventListener(\"DOMContentLoaded\", pageLoaded);
		</script>

		</body>
		
		</html>";
		return $PAGE;
	}
	
	function createButton($url, $image, $Back_CAPACITION){
		global $SITE, $TIME, $InfoXml;
		if($Back_CAPACITION!=''){
			$Back_CAPACITION = $InfoXml->$Back_CAPACITION;
		}
		if($url!=''){
			$url = "?".$TIME."&".$url;
		}else{
			$url = "?".$TIME;
		}
		$block = "<div class='caption'>
		<a href='$url'>
		<img alt='img' src='$SITE$image?$TIME' onerror=\"this.src='$SITE/SITE/DEFAULT/IMG/DEFAULT.png?$TIME'\">
		<p class='caption'>$Back_CAPACITION</p>
		</a>
		</div>";
		return $block;
	}
	
	switch(@$_GET['page']){
		case "APPS":{
			$ALTERNATE = $ALTERNATE."?page=APPS&";
			if(@$_GET["app"]!=''){
				$ALTERNATE = $ALTERNATE."app=".intval($_GET["app"])."&";
				include_once("PHP/app.php");
			}else{
				include_once("PHP/apps.php");
			}
			break;
		};
		case "CONTACTS":{
			$ALTERNATE = $ALTERNATE."?page=CONTACTS&";
			include_once("PHP/contacts.php");break;
			};
		case "BROWSER":{
			$ALTERNATE = $ALTERNATE."?page=BROWSER&";
			include_once("PHP/browser.php");break;
			};
		case "LANGUAGE":{
			$ALTERNATE = $ALTERNATE."?page=LANGUAGE&";
			include_once("PHP/language.php");break;
			};
		case "SITEMAP":{
			include_once("PHP/sitemap.php");break;
			};
		case "ERROR":{include_once("PHP/error.php");break;};
		default:{
			$ALTERNATE = $ALTERNATE."?";
			include_once("PHP/menu.php");
			};
	};
	exit;
?>