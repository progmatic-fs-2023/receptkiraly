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
    ('Scrambled Eggs',1, 'Classic breakfast dish', 'uploads/scrambled_eggs.png', 20, 1, 4, 1),
    ('Grilled Chicken Salad',2, 'Healthy and delicious', 'uploads/grilled_chicken_salad.png', 45, 2, 4, 2),
    ('Spaghetti Bolognese',3, 'Italian pasta dish', 'uploads/spaghetti_bolognese.png', 60, 3, 4, 3),
    ('Guacamole',3, 'Perfect party appetizer', 'uploads/guacamole.png', 30, 2, 4, 4),
    ('Fruit Smoothie',3, 'Refreshing and nutritious', 'uploads/fruit_smoothie.png', 10, 1, 1, 5),
    ('Chocolate Cake',4, 'Classic chocolate cake', 'uploads/chocolate_cake.png', 120, 3, 4, 6),
    ('Strawberry Smoothie',4, 'Healthy and delicious', 'uploads/strawberry_smoothie.png', 10, 1, 1, 7),
    ('Vegan Spaghetti Bolognese',5, 'Healthy and delicious pasta dish', 'uploads/vegan_spaghetti_bolognese.png', 45, 2, 4, 8),
    ('Plant-based Hamburger',1, 'Gluten-free, healthy and delicious', 'uploads/plant_based_hamburger.png', 60, 3, 4, 9),
    ('Garlic Cream Soup with Pan-Seared Shrimp',1, 'Perfect appetizer soup', 'uploads/garlic_cream_soup_with_shrimp.png', 120, 3, 4, 10);

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
    (5, 9),
    (6, 10),
    (7, 11),
    (7, 1),
    (7, 3),
    (7, 5),
    (8, 7),
    (9, 9),
    (9, 10),
    (10, 3),
    (10, 10),
    (10, 11);
