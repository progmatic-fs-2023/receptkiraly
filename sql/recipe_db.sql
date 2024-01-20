
/*táblárautalónév_oszlop elnevezéssel átláthatóbb*/

CREATE DATABASE recipe_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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
    user_id UUID REFERENCES users(id),
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    time_minutes SMALLINT,
    difficulty_level SMALLINT,
    serve_count SMALLINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id SMALLINT,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE labels (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE recipes_labels (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    recipe_id INT,
    label_id INT,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (label_id) REFERENCES labels(id)
);

/* Copy-paste példák: */

INSERT INTO users (id, username, email, password_hash)
VALUES
    ('bb48918b-62c2-4af8-9a3f-bfe2f487edfc','john_doe', 'john@example.com', 'hashed_password_123'),
    ('2c7e2091-fb34-44e7-8dfd-fe1c0bc2deb9','alice_smith', 'alice@example.com', 'hashed_password_456'),
    ('5703d862-c54c-47dc-bfc7-911e242ca24a','bob_jones', 'bob@example.com', 'hashed_password_789'),
    ('31f330e8-fff1-4bf0-a8d1-f98cd2b601e2','emma_wilson', 'emma@example.com', 'hashed_password_012'),
    ('e31ec973-37b0-42c2-b789-3e135cc2110a','michael_brown', 'michael@example.com', 'hashed_password_345');

INSERT INTO recipes (name, user_id, description, img, time_minutes, difficulty_level, serve_count, category_id)
VALUES
    ('Scrambled Eggs','bb48918b-62c2-4af8-9a3f-bfe2f487edfc', 'Classic breakfast dish', 'scrambled_eggs.png', 20, 1, 4, 1),
    ('Grilled Chicken Salad','bb48918b-62c2-4af8-9a3f-bfe2f487edfc', 'Healthy and delicious', 'grilled_chicken_salad.png', 45, 2, 4, 2),
    ('Spaghetti Bolognese','2c7e2091-fb34-44e7-8dfd-fe1c0bc2deb9', 'Italian pasta dish', 'spaghetti_bolognese.png', 60, 3, 4, 3),
    ('Guacamole','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Perfect party appetizer', 'guacamole.png', 30, 2, 4, 4),
    ('Fruit Smoothie','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Refreshing and nutritious', 'fruit_smoothie.png', 10, 1, 1, 5),
    ('Chocolate Cake','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Classic chocolate cake', 'chocolate_cake.png', 120, 3, 4, 6),
    ('Strawberry Smoothie','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Healthy and delicious', 'strawberry_smoothie.png', 10, 1, 1, 7),
    ('Vegan Spaghetti Bolognese','31f330e8-fff1-4bf0-a8d1-f98cd2b601e2', 'Healthy and delicious pasta dish', 'vegan_spaghetti_bolognese.png', 45, 2, 4, 8),
    ('Plant-based Hamburger','31f330e8-fff1-4bf0-a8d1-f98cd2b601e2', 'Gluten-free, healthy and delicious', 'plant_based_hamburger.png', 60, 3, 4, 9),
    ('Garlic Cream Soup with Pan-Seared Shrimp','31f330e8-fff1-4bf0-a8d1-f98cd2b601e2', 'Perfect appetizer soup', 'garlic_cream_soup_with_shrimp.png', 120, 3, 4, 10);

	INSERT INTO main_category (name) VALUES 
    ('meals'),
    ('desserts'),
    ('beverages');
	INSERT INTO category (name,main_category)
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

INSERT INTO recipes_categories (categories_recipe_id, categories_category_id)
VALUES
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Scrambled Eggs'), (SELECT category_id FROM category WHERE category_name = 'Breakfast')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Grilled Chicken Salad'), (SELECT category_id FROM category WHERE category_name = 'Lunch')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Dinner')),
	((SELECT recipe_id FROM recipes WHERE recipe_name = 'Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Appetizer')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Vegan Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Dinner')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Guacamole'), (SELECT category_id FROM category WHERE category_name = 'Appetizer')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Fruit Smoothie'), (SELECT category_id FROM category WHERE category_name = 'Smoothies')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Strawberry Smoothie'), (SELECT category_id FROM category WHERE category_name = 'Smoothies')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Chocolate Cake'), (SELECT category_id FROM category WHERE category_name = 'Cakes')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Plant-based Hamburger'), (SELECT category_id FROM category WHERE category_name = 'Lunch')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Garlic Cream Soup with Pan-Seared Shrimp'), (SELECT category_id FROM category WHERE category_name = 'Lunch'));

	INSERT INTO recipes_labels (recipe_id, label_id)
VALUES
    ((SELECT id FROM recipes WHERE name = 'Scrambled Eggs'), (SELECT id FROM labels WHERE name = 'low-carb')),
    ((SELECT id FROM recipes WHERE name = 'Vegan Spaghetti Bolognese'), (SELECT id FROM labels WHERE name = 'vegan')),
	((SELECT id FROM recipes WHERE name = 'Vegan Spaghetti Bolognese'), (SELECT id FROM labels WHERE name = 'vegetarian')),
    ((SELECT id FROM recipes WHERE name = 'Plant-based Hamburger'), (SELECT id FROM labels WHERE name = 'vegan')),
    ((SELECT id FROM recipes WHERE name = 'Plant-based Hamburger'), (SELECT id FROM labels WHERE name = 'vegetarian')),
	((SELECT id FROM recipes WHERE name = 'Plant-based Hamburger'), (SELECT id FROM labels WHERE name = 'gluten-free')),
    ((SELECT id FROM recipes WHERE name = 'Grilled Chicken Salad'), (SELECT id FROM labels WHERE name = 'low-carb')),
    ((SELECT id FROM recipes WHERE name = 'Fruit Smoothie'), (SELECT id FROM labels WHERE name = 'non-alcoholic')),
    ((SELECT id FROM recipes WHERE name = 'Garlic Cream Soup with Pan-Seared Shrimp'), (SELECT id FROM labels WHERE name = 'seafood'));

 CREATE TABLE ingredients (
	id SERIAL PRIMARY KEY,
	recipe_id INT,
	name VARCHAR(255) NOT NULL,
	FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);
