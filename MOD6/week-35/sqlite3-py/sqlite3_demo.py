''' SQLITE 3
* a built-in package is used to connect to SQLite3 in Python
* sqlite3 is a built-in package in Python so there is no need to install it
=============================================================
                    DB SCHEMA
=============================================================

CREATE TABLE owners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Make and model should have their own tables
-- Simplified for now
CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  manu_year INTEGER NOT NULL,
  make VARCHAR(255),
  model VARCHAR(255),
  owner_id INTEGER NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES owners(id)
);

INSERT INTO owners (first_name, last_name, email)
VALUES
('Tim', 'Petrol', 'rotary@fast.com'),
('Ryan', 'Runner', '10sec@jdm.com'),
('Tia', 'Petrol', 'typer@wtec.com');

INSERT INTO cars (manu_year, make, model, owner_id)
VALUES
(1993, 'Mazda', 'Rx7', 1),
(1995, 'Mitsubishi', 'Eclipse', 2),
(1994, 'Acura', 'Integra', 3);
'''

#  Connect to the databse:

import sqlite3

DB_FILE = "dev.db"

with sqlite3.connect(DB_FILE) as conn:
    print(conn)  # <sqlite3.Connection object at 0x102bddc60>

# Run file w/ this cmd:
#  pipenv run python sqlite3_demo.py
#  -- creates Pipfile + virtual env

# Create cursor:

with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
    curs.execute("SELECT 'Hello World!'")
    result = curs.fetchone()
    print(result)  # ('Hello World!',)

# cursor objects are iterable
# you can grab all of the results obtained by the cursor with fetchall()
with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
    curs.execute('SELECT manu_year, make, model FROM cars;')
    cars = curs.fetchall()
    for car in cars:
        print(car)
        # (1993, 'Mazda', 'Rx7')
        # (1995, 'Mitsubishi', 'Eclipse')
        # (1994, 'Acura', 'Integra')
