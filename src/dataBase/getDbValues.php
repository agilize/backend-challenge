<?php 
function getMysqlValues($conn){
    $sql = "SELECT * FROM info";
    $result = $conn->query($sql);
    $res = json_encode($result->fetch_all(MYSQLI_ASSOC));
    return $res;
}