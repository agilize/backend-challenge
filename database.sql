drop table if exists dados_portal_transparencia;

create table dados_portal_transparencia(
   id serial primary key,
   mes_ano text,
   programa_orcamentario text,
   acao_orcamentaria text,
   valor_empenhado integer,
   valor_liquidado integer,
   valor_pago integer,
   valor_restos_a_pagar_pagos integer
);
