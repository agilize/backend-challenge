<?php
require_once("./connection.php");
require_once("../scraping/filterValues.php");
require_once("../scraping/scrapValues.php");
$items = getScrapValues();
$conn = getMysqlConnection();
$formattedValues = separatedValuesInVariables($items);
$stmt = $conn->prepare("INSERT INTO info (mes_ano,orgao_superior,entidade_vinculada,valor_empenhado,valor_liquidado,valor_pago,valor_restos_a_pagar_pagos) VALUES (?,?,?,?,?,?,?)");


for ($i=0; $i < count($formattedValues[0]); $i++) { 
    $stmt->bind_param("sssdddd", $formattedValues[0][$i], $formattedValues[1][$i],$formattedValues[2][$i],
    $formattedValues[3][$i], $formattedValues[4][$i], $formattedValues[5][$i], $formattedValues[6][$i]);
    $stmt->execute(); 

}