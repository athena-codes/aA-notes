--> When you create an index for a single column, you have increased the
-- efficiency for looking up data by that column.

DROP TABLE IF EXISTS bakers;
DROP TABLE IF EXISTS cookies;


CREATE TABLE bakers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name VARCHAR(50)
);

CREATE TABLE cookies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    baker_id INTEGER,
    type VARCHAR(50),
    chocolate BOOLEAN
);

INSERT INTO bakers(full_name)
    VALUES
    ('Martin'),
    ('Gary'),
    ('Lisa');

INSERT INTO cookies(name, baker_id, type, chocolate)
    VALUES
    ('chocolate supreme', 3, 'chip', 1),
    ('double trouble', 2, 'chip', 1),
    ('sugar and spice', 1, 'sugar', 0),
    ('toffee coffee', 3, 'chip', 0);
