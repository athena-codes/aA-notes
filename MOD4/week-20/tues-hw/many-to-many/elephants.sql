-- Many-to-many relationsip

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE elephants (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  age INTEGER
);

-- foreign keys go together in a join table and represent
-- the relationship between primary keys

CREATE TABLE people_elephants (
  person_id INTEGER FOREIGN KEY NOT NULL,
  elephant_id INTEGER FOREIGN KEY NOT NULL
);
