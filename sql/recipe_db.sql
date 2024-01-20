
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
    description VARCHAR(255) NOT NULL,
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

/* Copy-paste példák: */

INSERT INTO users (username, email, password_hash)
VALUES
    ('john_doe', 'john@example.com', 'hashed_password_123'),
    ('alice_smith', 'alice@example.com', 'hashed_password_456'),
    ('bob_jones', 'bob@example.com', 'hashed_password_789'),
    ('emma_wilson', 'emma@example.com', 'hashed_password_012'),
    ('michael_brown', 'michael@example.com', 'hashed_password_345');

INSERT INTO main_category (name) 
VALUES 
    ('meals'),
    ('desserts'),
    ('beverages');

INSERT INTO category (name, main_category)
VALUES
    ('Appetizer',1),
    ('Breakfast',1),
    ('Lunch',1),
    ('Dinner',1),
    ('Cakes',2),
    ('Frozen Desserts',2),
    ('Chocolate and Candies',2),
    ('Fruit Desserts',2),
    ('Hot Drinks',3),
    ('Cold Drinks',3),
    ('Soft Drinks',3),
    ('Juices',3),
    ('Smoothies',3);

INSERT INTO recipes (name, user_id, description, img, time_minutes, difficulty_level, serve_count, category_id)
VALUES
    ('Scrambled Eggs',1, 'Classic breakfast dish', 'scrambled_eggs.png', 20, 1, 4, 1),
    ('Grilled Chicken Salad',2, 'Healthy and delicious', 'grilled_chicken_salad.png', 45, 2, 4, 2),
    ('Spaghetti Bolognese',3, 'Italian pasta dish', 'spaghetti_bolognese.png', 60, 3, 4, 3),
    ('Guacamole',3, 'Perfect party appetizer', 'guacamole.png', 30, 2, 4, 4),
    ('Fruit Smoothie',3, 'Refreshing and nutritious', 'fruit_smoothie.png', 10, 1, 1, 5),
    ('Chocolate Cake',4, 'Classic chocolate cake', 'chocolate_cake.png', 120, 3, 4, 6),
    ('Strawberry Smoothie',4, 'Healthy and delicious', 'strawberry_smoothie.png', 10, 1, 1, 7),
    ('Vegan Spaghetti Bolognese',5, 'Healthy and delicious pasta dish', 'vegan_spaghetti_bolognese.png', 45, 2, 4, 8),
    ('Plant-based Hamburger',1, 'Gluten-free, healthy and delicious', 'plant_based_hamburger.png', 60, 3, 4, 9),
    ('Garlic Cream Soup with Pan-Seared Shrimp',1, 'Perfect appetizer soup', 'garlic_cream_soup_with_shrimp.png', 120, 3, 4, 10);

INSERT INTO labels (name)
VALUES
    ('vegan'),
    ('vegetarian'),
	('nut-free'),
    ('egg-free'),
	('dairy-free'),
	('gluten-free'),
    ('low-carb'),
    ('spicy'),
	('alcoholic'),
	('non-alcoholic'),
	('seafood');

INSERT INTO recipes_labels (recipe_id, label_id)
VALUES
    (1, 1),
    (1, 2),
	(1, 3),
    (2, 4),
    (2, 5),
	(3, 6),
    (4, 7),
    (5, 8),
    (5, 9);

--  CREATE TABLE ingredients (
-- 	id SERIAL PRIMARY KEY,
-- 	recipe_id INT,
-- 	name VARCHAR(255) NOT NULL,
-- 	FOREIGN KEY (recipe_id) REFERENCES recipes(id)
-- );
