CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password_hash VARCHAR(100) NOT NULL,
	registration_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO users (username, email, password_hash) 
VALUES ('john_doe', 'john@example.com', 'as8d7s8d45as21ds5');
