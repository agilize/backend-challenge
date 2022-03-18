<?php echo
// Url amigavel
$url = (isset($_GET["url"]))?$_GET["url"]:false;
$url = array_filter(explode('/', $url));
$file = (isset($url[0]))?$url[0].".php":"./src/routes/routes.php";
if (is_file($file)) {
    include($file);
} else {
    include('./src/routes/routes.php');
}