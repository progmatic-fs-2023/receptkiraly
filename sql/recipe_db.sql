
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
    recipe_main_category_id SMALLINT,
    recipe_img VARCHAR(255),
    recipe_time_minutes SMALLINT,
    recipe_difficulty_level SMALLINT,
    recipe_serve_count SMALLINT,
    recipe_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ez nem fog kelleni
-- CREATE TABLE users_recipes (
-- 	post_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
-- 	post_user_id UUID,
-- 	post_recipe_id INT,
-- 	FOREIGN KEY (post_user_id) REFERENCES users(user_id),
-- 	FOREIGN KEY (post_recipe_id) REFERENCES recipes(recipe_id)
-- );
--Ez egy recipe type hierarchy :D
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
    ('chefs');
	INSERT INTO category (category_name,category_main_category)
VALUES
 ('appetizers',1),
('dippers',1),
('mini_ites',1,)
('salads',1),
('pastry_slices',1),
('breakfast',1),
('egg',1),
('cereals',1),
('fruit_salads',1),
('dairy_based',1),
('lunch',1),
('sandwiches',1),
('salads',1),
('soups',1),
('burgers',1),
('stews',1),
('pasta',1),
('meaty',1),
('dinner',1),
('steak',1),
('rice_dishes',1),
('seafood',1),
('grilled',1),
('national_cuisines',1),
('italian',1),
('french',1),
('mexican',1),
('chinese',1),
('indian',1),
('greek',1),
('seasonal',1),
('spring',1),
('summer',1),
('fall',1),
('winter',1),
("cakes",2),
("sponge_cakes",2),
("muffins",2),
("cupcakes",2),
("frozen_desserts",2),
("ice_cream",2),
("sorbet",2),
("gelato",2),
("ice_cream_cakes",2),
("chocolates_and_candies",2),
("truffles",2),
("bonbons",2),
("bars_and_slabs",2),
("creams_and_mousses",2),
("fruit_desserts",2),
("fruit_salads",2),
("puddings",2),
("sorbet",2),
("traditional",2),
("éclairs",2),
("baklava",2),
("cannoli",2),
("mochi",2),
("hot_drinks",3),
("coffee",3),
("tea",3),
("hot_chocolate",3),
("chai_tea",3),
("cold_drinks",3),
("iced_coffee",3),
("iced_tea"3),
("cold_brew",3),
("lemonade",3),
("soft_drinks",3),
("cola",3),
("ginger_ale",3),
("root_beer",3),
("juices",3),
("orange_juices",3),
("apple_juice",3),
("grape_juice",3),
("cranberry_juice",3),
("smoothies",3),
("berry_smoothie",3),
("green_smoothie",3),
("protein_smoothie",3);

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
);*/
 CREATE TABLE ingredients (
	ingredient_id SERIAL PRIMARY KEY,
	ingredient_recipe_id INT,
	ingredient_name VARCHAR(255) NOT NULL,
	FOREIGN KEY (ingredients_recipe_id) REFERENCES recipes(recipe_id)
);
/*
-> értékelés/visszajelzés tábla alapja: egyedi azonosító, recept azonosító, értékelés, hozzászólás, értékelő id, idő
);*/
CREATE TABLE recipes_review (
	review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	review_user_id INT,
	review_stars INT,
	review_comment TEXT,
	review_date DATE DEFAULT CURRENT_DATE.
	FOREIGN KEY (review_user_id) REFERENCES users(user_id)

