CREATE DATABASE agilize_scraping;

CREATE TABLE IF NOT EXISTS despesas (
 id SERIAL PRIMARY KEY,
 mes_ano TEXT,
 programa_orcamentario TEXT,
 acao_orcamentaria TEXT,
 valor_empenhado TEXT,
 valor_liquidado TEXT,
 valor_pago TEXT,
 valor_restos_a_pagar_pagos TEXT
  )