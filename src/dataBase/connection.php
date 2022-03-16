<?php 
require_once("../../vendor/autoload.php");
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();
$mysql_host = $_ENV['MYSQL_HOST'];
$mysql_user = $_ENV['MYSQL_USER'];
$mysql_pass = $_ENV['MYSQL_PASSWORD'];
$mysql_db = "raspagem_despesas";

function getMysqlConnection(){
    global $mysql_host, $mysql_user, $mysql_pass, $mysql_db;
    
    $conn = new mysqli($mysql_host, $mysql_user, $mysql_pass, $mysql_db);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
    }