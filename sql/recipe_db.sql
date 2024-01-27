
/*táblárautalónév_oszlop elnevezéssel átláthatóbb*/

CREATE DATABASE recipe_db;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL UNIQUE,
	email VARCHAR(100) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	registration_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE main_category (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE category (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	main_category INT,
	FOREIGN KEY (main_category) REFERENCES main_category(id)
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    user_id SERIAL,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    img VARCHAR(255),
    time_minutes SMALLINT,
    difficulty_level SMALLINT,
    serve_count SMALLINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id SMALLINT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE labels (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE recipes_labels (
    id SERIAL PRIMARY KEY,
    recipe_id INT,
    label_id INT,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (label_id) REFERENCES labels(id)
);

 CREATE TABLE ingredients (
	id SERIAL PRIMARY KEY,
	recipe_id INT,
	name VARCHAR(255) NOT NULL,
	FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);
