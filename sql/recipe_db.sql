CREATE DATABASE recipeking_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE recipes (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	name VARCHAR(255),
	description VARCHAR(255)
);

CREATE TABLE users (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	username VARCHAR(100) NOT NULL UNIQUE,
	email VARCHAR(100) NOT NULL UNIQUE,
	password_hash VARCHAR(100) NOT NULL,
	registration_date DATE DEFAULT CURRENT_DATE
);
