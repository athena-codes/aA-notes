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

#  GET ALL CARS
def print_all_cars():
    #  The cursor will let you use parameterized SQL statements to execute your commands
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute('SELECT manu_year, make, model, owner_id FROM cars;')
        cars = curs.fetchall()
        for car in cars:
            print(car)
            print(car)
            print(car)


print_all_cars()
# (1993, 'Mazda', 'Rx7', 1)
# (1995, 'Mitsubishi', 'Eclipse', 2)
# (1994, 'Acura', 'Integra', 3)
        # (1993, 'Mazda', 'Rx7')
        # (1995, 'Mitsubishi', 'Eclipse')
        # (1994, 'Acura', 'Integra')

#   GET CAR OF SPECIFIC OWNER
def get_owners_cars(owner_id):
    """
    Fetch and return all cars in the cars table
    :param owner_id: <int> the id of the owner who's cars to return
    :return: <list> the results of the query
    """
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute("""
                     SELECT manu_year, make, model FROM cars
                     WHERE owner_id = :owner_id
                     """,
                     {'owner_id': owner_id})
        results = curs.fetchall()
        return results


print(get_owners_cars(1))  # [(1993, 'Mazda', 'Rx7')]


#   CREATE NEW CAR
def add_new_car(manu_year, make, model, owner_id):
    """
    Add the given car to the database
    :param manu_year: <int> the year the car was made
    :param make: <string> the manufacturer of the car
    :param model: <string> the model of the car
    :param owner_id: <int> the id number of the owner
    """
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        # curs.execute(f'INSERT INTO {table}{columns} VALUES{values};')
        curs.execute("""
                     INSERT INTO cars (manu_year, make, model, owner_id)
                     VALUES (:manu_year, :make, :model, :owner_id)
                     """,
                     {'manu_year': manu_year,
                      'make': make,
                      'model': model,
                      'owner_id': owner_id})


add_new_car(2000, 'Ford', 'Lightning', 2)

add_new_car(1994, 'Toyota', 'Supra', 2)

print_all_cars()
# (1993, 'Mazda', 'Rx7', 1)
# (1995, 'Mitsubishi', 'Eclipse', 2)
# (1994, 'Acura', 'Integra', 3)
# (2000, 'Ford', 'Lightning', 2)
# (1994, 'Toyota', 'Supra', 2)


#   UPDATE OWNER OF A CAR
def change_car_owner(car_id, new_owner_id):
    """
    Update the owner of a car, both by record id
    :param car_id: <int> the id of the car to change
    :param new_owner_id: <int> the owner_id to give ownership to
    """
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute("""
                     UPDATE cars SET owner_id = :new_owner_id
                     WHERE id = :car_id
                     """,
                     {'car_id': car_id,
                      'new_owner_id': new_owner_id})


change_car_owner(5, 1)

print_all_cars()
# (1993, 'Mazda', 'Rx7', 1)
# (1995, 'Mitsubishi', 'Eclipse', 2)
# (1994, 'Acura', 'Integra', 3)
# (2000, 'Ford', 'Lightning', 2)
# (1994, 'Toyota', 'Supra', 1)       <- owner_id is now 1

#   DELETE A CAR


def delete_car(car_id):
    """
    Delete the record for a car given an id for that car
    :param car_id: <int> the id of the car record to remove
    """
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute("""
                     DELETE FROM cars WHERE id = :car_id
                     """,
                     {'car_id': car_id})


delete_car(2)

print_all_cars()
# (1993, 'Mazda', 'Rx7', 1)
# (1994, 'Acura', 'Integra', 3)
# (2000, 'Ford', 'Lightning', 2)
# (1994, 'Toyota', 'Supra', 1)
