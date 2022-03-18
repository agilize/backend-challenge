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
    try {
        $values = getMysqlValues($conn);
        echo $values;
    } catch (Exception $e) {
        echo 'error';
    }
});

$app->get('/DB/create', function () {
    global $conn;
    try {
        createDB($conn);
        echo 'banco de dados criado';
    } catch (Exception $e) {
        echo 'erro a criar a base de dados';
    }
});

$app->get('/DB/populate', function () {
    global $conn;
    try {
        $values = getMysqlValues($conn);
        if ($values == '[]') {
            insertInDb($conn);
            echo 'populado com sucesso';
        } else {
            echo 'banco de dados ja populado';
        }
    } catch (Exception) {
        echo "erro a popular a base de dados";
    }
});

$app->run();