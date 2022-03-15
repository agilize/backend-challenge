<?php 
require_once("../../vendor/autoload.php");
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();
$mysql_host = $_ENV['MYSQL_HOST'];
$mysql_user = $_ENV['MYSQL_USER'];  
$mysql_pass = $_ENV['MYSQL_PASSWORD'];
$mysql_db = "raspagem_despesas";

try{
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_pass, $mysql_db);
echo "conectado";
}catch(Exception $e){
    echo "Connection failed: " . $e->getMessage();
}