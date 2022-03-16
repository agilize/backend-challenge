<?php 
require_once("./scrapValues.php"); 
$items = getScrapValues();

function remove_useless_values(){
    global $items;
    array_splice($items, 0, 8);
    for ($i = 0; $i < count($items); $i++) {
        if ($items[$i] == "Detalhar") {
            array_splice($items, $i, 1);
        }
    }
    return $items;
}