<?php
$date = [];
$agency = [];
$entities = [];
$committedValue = [];
$liquidatedValue = [];
$paidValue = [];
$unpaidValue = [];

function removeUselessValues($items)
{
    array_splice($items, 0, 8);
    for ($i = 0; $i < count($items); $i++) {
        if ($items[$i] == "Detalhar") {
            array_splice($items, $i, 1);
        }
    }
    return $items;
}

function formatValues($data)
{
    $items = removeUselessValues($data);
    foreach ($items as $key => $value) {
        $items[$key] = str_replace(".", "", $value);
        $items[$key] = str_replace(" ", "", $value);
        $items[$key] = str_replace(",", ".", $items[$key]);
    }
    return $items;
}

function separatedValuesInVariables($items)
{
    global $date, $agency, $entities, $committedValue, $liquidatedValue, $paidValue, $unpaidValue;
    $value = formatValues($items);
    
    for ($i = 0; $i < count($value); $i++) {
        if ($i % 7 == 0) {
            $date[] = $value[$i];
        } elseif ($i % 7 == 1) {
            $agency[] = $value[$i];
        } elseif ($i % 7 == 2) {
            $entities[] = $value[$i];
        } elseif ($i % 7 == 3) {
            $committedValue[] = $value[$i];
        } elseif ($i % 7 == 4) {
            $liquidatedValue[] = $value[$i];
        } elseif ($i % 7 == 5) {
            $paidValue[] = $value[$i];
        } elseif ($i % 7 == 6) {
            $unpaidValue[] = $value[$i];
        }
    }
    return [$date, $agency, $entities, $committedValue, $liquidatedValue, $paidValue, $unpaidValue];
}