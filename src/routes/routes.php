<?php
$page = "route";
require_once("./vendor/autoload.php");
require_once("./src/dataBase/getDbValues.php");
require_once("./src/dataBase/connection.php");
require_once("./src/dataBase/createDB.php");
require_once("./src/dataBase/insertDbValues.php");
$app = new \Slim\Slim();
$conn = getMysqlConnection();
$app->get('/', function () {
    echo 'home';
});
$app->get('/api/dados', function () {
    global $conn;
    $values = getMysqlValues($conn);
    echo $values;
});
$app->get('/DB/create', function () {
    global $conn;
    createDB($conn);
    echo "DB created";
});
$app->get('/DB/populate', function () {
    global $conn;
    insertInDb($conn);
    echo "DB populated";
});

$app->run();