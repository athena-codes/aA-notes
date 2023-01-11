-- One-to-many relationship

CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN DEFAULT 0,
  owners_id INTEGER,
  FOREIGN KEY (owners_id) REFERENCES owners(id)
);

-- 'owner_id' column should refer to corresponding id-type column in 'owners' table.

CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
