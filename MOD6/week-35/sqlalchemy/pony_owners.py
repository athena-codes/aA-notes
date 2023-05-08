from sqlalchemy import create_engine

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)

with engine.connect() as connection:
    result = connection.execute("""
        SELECT o.first_name, o.last_name, p.name
        FROM owners o
        JOIN ponies p ON (o.id = p.owner_id)
    """)
    for row in result:
        print(row["first_name"], row["last_name"], "owns", row["name"])

engine.dispose()
