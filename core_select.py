from re import S
from sqlalchemy import select
from core import user_table, engine
import json


def select_all():
    s = select([user_table])
    return json.dumps(
        [dict(row) for row in engine.connect().execute(s)], indent=4, sort_keys=True, ensure_ascii=False)

print(select_all())