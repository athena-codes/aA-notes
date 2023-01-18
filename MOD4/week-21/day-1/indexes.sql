--> to drop an index
--> use .indexes to view list of indexes
-- DROP INDEX idx_cookies_type_chocolate;

-- Example
CREATE UNIQUE INDEX idx_cookies_baker_id_type_chocolate
  ON cookies(baker_id, type, chocolate);
  --> defines an index with a UNIQUE constraint to avoid duplicates
  -- across the three columns
