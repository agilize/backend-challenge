CREATE DATABASE Agilize_Scraping;

CREATE TABLE IF NOT EXISTS Despesas (
 id SERIAL PRIMARY KEY,
 mes_ano TEXT,
 programa_orcamentario TEXT,
 acao_orcamentaria TEXT,
 valor_empenhado INTEGER,
 valor_liquidado INTEGER,
 valor_pago INTEGER,
 valor_restos_a_pagar_pagos INTEGER
  )