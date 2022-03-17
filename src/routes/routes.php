<?php
$page = "route";
require_once("./vendor/autoload.php");
require_once("./src/dataBase/getDbValues.php");
require_once("./src/dataBase/connection.php");
$app = new \Slim\Slim();
$app->get('/', function () {
    echo 'home';
});
$app->get('/api/dados', function () {
    $conn = getMysqlConnection();
    $values = getMysqlValues($conn);
    echo $values;
});
$app->run();