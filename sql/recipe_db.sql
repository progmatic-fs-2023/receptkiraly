CREATE DATABASE recipe_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE recipes (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(255) NOT NULL,
	vegetarian BOOLEAN DEFAULT false,
	vegan BOOLEAN DEFAULT false,
	glutenfree BOOLEAN DEFAULT false,
	lactosefree BOOLEAN DEFAULT false,
	sugarfree BOOLEAN DEFAULT false
);


CREATE TABLE users (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	username VARCHAR(100) NOT NULL UNIQUE,
	email VARCHAR(100) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	registration_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE users_recipes (
	user_id UUID,
	recipe_id UUID,
	PRIMARY KEY (user_id, recipe_id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);