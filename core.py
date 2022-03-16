from importlib.metadata import metadata
from sqlalchemy import (create_engine, MetaData, Table, Column, Integer, String)

engine = create_engine('sqlite:///agilize.db', echo=False)

metadata = MetaData(bind=engine)

user_table = Table('gastos_governo', metadata,
    Column('id', Integer, primary_key=True),
    Column('mes_ano', String),
    Column('orgao_superior', String),
    Column('orgao_entidade', String),
    Column('valor_empenhado', String),
    Column('Valor_liquidado', String),
    Column('Valor_pago', String),
    Column('valor_resto_a_pagar', String),
)

metadata.create_all()