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
    ('appetizer',1),
    ('breakfast',1),
    ('lunch',1),
    ('dinner',1),
    ('cakes',2),
    ('frozen_desserts',2),
    ('chocolate_and_candies',2),
    ('fruit_desserts',2),
    ('hot_drinks',3),
    ('cold_drinks',3),
    ('soft_drinks',3),
    ('juices',3),
    ('smoothies',3);

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
