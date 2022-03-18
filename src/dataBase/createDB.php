<?php
function createDb($conn)
{
    //Dropa a tabela atual e cria uma nova
    $sql =
    "DROP DATABASE IF EXISTS raspagem_despesas;
    CREATE DATABASE raspagem_despesas;
    ALTER DATABASE raspagem_despesas CHARACTER SET utf8 COLLATE utf8_general_ci;
    USE raspagem_despesas;
    CREATE TABLE IF NOT EXISTS info(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    mes_ano VARCHAR(7),
    orgao_superior VARCHAR(100),
    entidade_vinculada VARCHAR(100),
    valor_empenhado FLOAT,
    valor_liquidado FLOAT,
    valor_pago FLOAT,
    valor_restos_a_pagar_pagos FLOAT
    );";
    $conn->multi_query($sql);
}