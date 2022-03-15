<?php
require_once("../../vendor/autoload.php");
// Documentação e repositório da biblioteca phpdotenv: https://github.com/vlucas/phpdotenv
class Connection
{
    private $host = "";
    private $db_name = "raspagem_despesas";
    private $username = "";
    private $password = "";
    public $conn;

    public function __construct()
    {
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
        $dotenv->load();
        $this->host = $_ENV['MYSQL_HOST'] . ":" . $_ENV['MYSQL_PORT'];
        $this->username = $_ENV['MYSQL_USER'];
        $this->password = $_ENV['MYSQL_PASSWORD'];
    }

    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}