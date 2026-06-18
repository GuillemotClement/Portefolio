CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT not null
);

-- CREATE TABLE project (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL UNIQUE,
--     description TEXT NOT NULL,
--
-- )