
/*táblárautalónév_oszlop elnevezéssel átláthatóbb*/

CREATE DATABASE recipe_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
	user_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	user_username VARCHAR(100) NOT NULL UNIQUE,
	user_email VARCHAR(100) NOT NULL UNIQUE,
	user_password_hash VARCHAR(255) NOT NULL,
	user_registration_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    recipe_name VARCHAR(100) NOT NULL,
    recipe_description VARCHAR(255) NOT NULL,
    recipe_img VARCHAR(255),
    recipe_time_minutes SMALLINT,
    recipe_difficulty_level SMALLINT,
    recipe_serve_count SMALLINT,
    recipe_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE main_category (
	main_category_id SERIAL PRIMARY KEY,
	main_category_name VARCHAR(100) NOT NULL
);

CREATE TABLE category (
	category_id SERIAL PRIMARY KEY,
	category_name VARCHAR(100) NOT NULL,
	category_main_category INT,
	FOREIGN KEY (category_main_category) REFERENCES main_category(main_category_id)
);

CREATE TABLE recipes_categories (
    categories_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    categories_recipe_id INT,
    categories_category_id INT,
    FOREIGN KEY (categories_recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (categories_category_id) REFERENCES category(category_id)
);

CREATE TABLE labels (
	label_id SERIAL PRIMARY KEY,
	label_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE recipes_labels (
    labels_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    labels_recipe_id INT,
    labels_label_id INT,
    FOREIGN KEY (labels_recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (labels_label_id) REFERENCES labels(label_id)
);

/* Copy-paste példák: */

INSERT INTO users (user_id, user_username, user_email, user_password_hash)
VALUES
    ('bb48918b-62c2-4af8-9a3f-bfe2f487edfc','john_doe', 'john@example.com', 'hashed_password_123'),
    ('2c7e2091-fb34-44e7-8dfd-fe1c0bc2deb9','alice_smith', 'alice@example.com', 'hashed_password_456'),
    ('5703d862-c54c-47dc-bfc7-911e242ca24a','bob_jones', 'bob@example.com', 'hashed_password_789'),
    ('31f330e8-fff1-4bf0-a8d1-f98cd2b601e2','emma_wilson', 'emma@example.com', 'hashed_password_012'),
    ('e31ec973-37b0-42c2-b789-3e135cc2110a','michael_brown', 'michael@example.com', 'hashed_password_345');

INSERT INTO recipes (recipe_name, user_id, recipe_description, recipe_main_category_id, recipe_img, recipe_time_minutes, recipe_difficulty_level, recipe_serve_count)
VALUES
    ('Scrambled Eggs','bb48918b-62c2-4af8-9a3f-bfe2f487edfc', 'Classic breakfast dish', 1, 'scrambled_eggs.png', 20, 1, 4),
    ('Grilled Chicken Salad','bb48918b-62c2-4af8-9a3f-bfe2f487edfc', 'Healthy and delicious', 1, 'grilled_chicken_salad.png', 45, 2, 4),
    ('Spaghetti Bolognese','2c7e2091-fb34-44e7-8dfd-fe1c0bc2deb9', 'Italian pasta dish', 1, 'spaghetti_bolognese.png', 60, 3, 4),
    ('Guacamole','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Perfect party appetizer', 1, 'guacamole.png', 30, 2, 4),
    ('Fruit Smoothie','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Refreshing and nutritious', 3, 'fruit_smoothie.png', 10, 1, 1),
    ('Chocolate Cake','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Classic chocolate cake', 2, 'chocolate_cake.png', 120, 3, 4),
    ('Strawberry Smoothie','5703d862-c54c-47dc-bfc7-911e242ca24a', 'Healthy and delicious', 3, 'strawberry_smoothie.png', 10, 1, 1),
    ('Vegan Spaghetti Bolognese','31f330e8-fff1-4bf0-a8d1-f98cd2b601e2', 'Healthy and delicious pasta dish', 1, 'vegan_spaghetti_bolognese.png', 45, 2, 4),
    ('Plant-based Hamburger','31f330e8-fff1-4bf0-a8d1-f98cd2b601e2', 'Gluten-free, healthy and delicious', 1, 'plant_based_hamburger.png', 60, 3, 4),
    ('Garlic Cream Soup with Pan-Seared Shrimp','31f330e8-fff1-4bf0-a8d1-f98cd2b601e2', 'Perfect appetizer soup', 3, 'garlic_cream_soup_with_shrimp.png', 120, 3, 4);

	INSERT INTO main_category (main_category_name) VALUES 
    ('meals'),
    ('desserts'),
    ('beverages');

	INSERT INTO category (category_name,category_main_category)
VALUES
    ('Breakfast', 1),
    ('Lunch', 1),
    ('Dinner', 1),
    ('Appetizer', 1),
    ('Cheesecake', 2),
	('Cake', 2),
	('Cookie', 2),
	('Cocktail', 3),
	('Smoothie', 3),
	('Shake', 3),
	('Cocktail', 3),
	('Soup', 1),
	('Pie', 2),
	('Pizza', 1),
	('Hamburger', 1),
	('Pasta', 1),
	('Salad', 1);

	INSERT INTO labels (label_name)
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
	((SELECT recipe_id FROM recipes WHERE recipe_name = 'Grilled Chicken Salad'), (SELECT category_id FROM category WHERE category_name = 'Salad')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Dinner')),
	((SELECT recipe_id FROM recipes WHERE recipe_name = 'Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Pasta')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Vegan Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Dinner')),
	((SELECT recipe_id FROM recipes WHERE recipe_name = 'Vegan Spaghetti Bolognese'), (SELECT category_id FROM category WHERE category_name = 'Pasta')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Guacamole'), (SELECT category_id FROM category WHERE category_name = 'Appetizer')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Fruit Smoothie'), (SELECT category_id FROM category WHERE category_name = 'Smoothie')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Strawberry Smoothie'), (SELECT category_id FROM category WHERE category_name = 'Smoothie')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Chocolate Cake'), (SELECT category_id FROM category WHERE category_name = 'Cake')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Plant-based Hamburger'), (SELECT category_id FROM category WHERE category_name = 'Hamburger')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Garlic Cream Soup with Pan-Seared Shrimp'), (SELECT category_id FROM category WHERE category_name = 'Soup'));

	INSERT INTO recipes_labels (labels_recipe_id, labels_label_id)
VALUES
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Scrambled Eggs'), (SELECT label_id FROM labels WHERE label_name = 'low-carb')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Vegan Spaghetti Bolognese'), (SELECT label_id FROM labels WHERE label_name = 'vegan')),
	((SELECT recipe_id FROM recipes WHERE recipe_name = 'Vegan Spaghetti Bolognese'), (SELECT label_id FROM labels WHERE label_name = 'vegetarian')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Plant-based Hamburger'), (SELECT label_id FROM labels WHERE label_name = 'vegan')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Plant-based Hamburger'), (SELECT label_id FROM labels WHERE label_name = 'vegetarian')),
	((SELECT recipe_id FROM recipes WHERE recipe_name = 'Plant-based Hamburger'), (SELECT label_id FROM labels WHERE label_name = 'gluten-free')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Grilled Chicken Salad'), (SELECT label_id FROM labels WHERE label_name = 'low-carb')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Fruit Smoothie'), (SELECT label_id FROM labels WHERE label_name = 'non-alcoholic')),
    ((SELECT recipe_id FROM recipes WHERE recipe_name = 'Garlic Cream Soup with Pan-Seared Shrimp'), (SELECT label_id FROM labels WHERE label_name = 'seafood'));


/* KÉSŐBB, HA kellene..:
-> hozzávalós tábla alapja: egyedi azonosító, recept azonosító, hozzávaló neve

 CREATE TABLE ingredients (
	ingredient_id SERIAL PRIMARY KEY,
	ingredient_recipe_id INT,
	ingredient_name VARCHAR(255) NOT NULL,
	FOREIGN KEY (ingredients_recipe_id) REFERENCES recipes(recipe_id)
);

-> értékelés/visszajelzés tábla alapja: egyedi azonosító, recept azonosító, értékelés, hozzászólás, értékelő id, idő

CREATE TABLE recipes_review (
	review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	review_user_id INT,
	review_stars INT,
	review_comment TEXT,
	review_date DATE DEFAULT CURRENT_DATE.
	FOREIGN KEY (review_user_id) REFERENCES users(user_id)
);*/