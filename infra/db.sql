-- Create a table to store users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY, -- Auto-incrementing ID
  name VARCHAR(100) NOT NULL -- User name, required
);