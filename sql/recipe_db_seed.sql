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
    ('Scrambled Eggs',1, 'Crack the eggs into a bowl. Add a pinch of salt and pepper. If you want creamier eggs, you can also add a splash of milk or cream. Whisk the eggs with a fork or whisk until the yolks and whites are well combined. You can whisk vigorously for fluffier eggs. Heat a non-stick skillet over medium heat. Add butter or cooking oil and let it melt. Pour the whisked eggs into the skillet. Allow them to set for a few seconds, then gently stir with a spatula. Continue stirring occasionally, breaking up any large curds. Cook until the eggs are just set but still moist. If youre adding cheese, herbs, or vegetables, you can fold them into the eggs during the last minute of cooking. Remove the scrambled eggs from the heat just before they are fully cooked, as they will continue to cook a bit from the residual heat. Taste and adjust the seasoning if necessary.', 'http://localhost:3000/uploads/scrambled_eggs.png', 10, 1, 2, 2),
    ('Grilled Chicken Salad',2, 'In a bowl, mix olive oil, lemon juice, minced garlic, dried oregano, salt, and pepper to create the marinade for the chicken. Place the chicken breasts in a resealable plastic bag or shallow dish, pour the marinade over the chicken, and let it marinate for at least 30 minutes (or longer for more flavor). Preheat the grill or grill pan over medium-high heat. Grill the marinated chicken breasts for about 6-8 minutes per side or until fully cooked. Let them rest for a few minutes before slicing. While the chicken is grilling, prepare the salad ingredients. Combine mixed salad greens, cherry tomatoes, cucumber, red onion, avocado, and feta cheese in a large salad bowl. In a small bowl, whisk together olive oil, balsamic vinegar, Dijon mustard, honey, salt, and pepper to make the dressing. Slice the grilled chicken and arrange it on top of the salad. Drizzle the dressing over the salad or serve it on the side. Toss the salad gently to combine all the ingredients. Optionally, you can add any of the optional additions mentioned above.', 'http://localhost:3000/uploads/grilled_chicken_salad.png', 30, 2, 4, 4),
    ('Spaghetti Bolognese',3, 'Heat olive oil in a large skillet or Dutch oven over medium heat. Add chopped onion, carrot, and celery to the skillet. Cook until the vegetables are softened, about 5-7 minutes. Add minced garlic and cook for an additional 1-2 minutes until fragrant. Add the ground beef to the skillet, breaking it up with a spoon, and cook until browned. Stir in tomato paste and cook for 2 minutes to enhance the flavor. Pour in crushed tomatoes, red wine (if using), beef or vegetable broth, dried oregano, dried basil, salt, black pepper, sugar (if using), and bay leaves. Stir well to combine. Bring the mixture to a simmer, then reduce the heat to low, cover, and let it simmer for at least 1-2 hours. The longer it simmers, the richer the flavors will be. Stir occasionally. While the sauce is simmering, cook the spaghetti according to the package instructions in a separate pot. Drain and set aside. Taste the Bolognese sauce and adjust the seasoning if needed. Remove the bay leaves. Serve the Bolognese sauce over the cooked spaghetti. Garnish with grated Parmesan cheese and chopped fresh parsley.', 'http://localhost:3000/uploads/spaghetti_bolognese.png', 60, 2, 4, 4),
    ('Guacamole',3, 'Cut the avocados in half, remove the seeds, and scoop the flesh into a mixing bowl. Mash the avocados with a fork or potato masher until you reach your desired level of creaminess. Add the diced tomato, chopped red onion, minced garlic, lime juice, and chopped cilantro to the mashed avocados. If you like some heat, you can add finely diced jalapeño at this point. Season with salt and pepper to taste. You can also add a pinch of ground cumin for extra flavor. Gently mix all the ingredients until well combined. Taste and adjust the seasoning or lime juice as needed. If youre not serving the guacamole immediately, press plastic wrap directly onto the surface of the guacamole to minimize oxidation and preserve its green color. Serve the guacamole with tortilla chips, as a topping for tacos or nachos, or alongside your favorite dishes.', 'http://localhost:3000/uploads/guacamole.png', 15, 2, 2, 1),
    ('Fruit Smoothie',3, 'Prepare the Ingredients: Peel the banana and break it into a few chunks. If your berries are not pre-frozen, you can add ice cubes later to chill the smoothie.Blend: In a blender, combine the frozen mixed berries, banana chunks, Greek yogurt, orange juice, almond milk, and honey or maple syrup (if using).Blend Until Smooth: Blend the ingredients until smooth and creamy. If the consistency is too thick, you can add more liquid (orange juice or almond milk) to achieve your desired thickness. Taste and Adjust: Taste the smoothie and adjust the sweetness or thickness according to your preference. You can add more honey or maple syrup if you like it sweeter. Serve: Pour the smoothie into glasses and, if desired, add a few ice cubes to make it extra refreshing. Garnish (Optional): Garnish with a slice of banana, a few berries, or a sprig of mint for a decorative touch. Enjoy: Sip and enjoy your delicious and nutritious fruit smoothie!', 'http://localhost:3000/uploads/fruit_smoothie.png', 10, 1, 1, 13),
    ('Chocolate Cake',4, 'Preheat the Oven: Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans. Prepare the Dry Ingredients: In a large bowl, sift together the flour, cocoa powder, baking powder, baking soda, and salt. Set aside. Mix Wet Ingredients: In another large bowl, beat the sugar and eggs until well combined. Add in the milk, vegetable oil, and vanilla extract. Mix well. Combine Wet and Dry Ingredients: Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Do not overmix. Add Boiling Water: Stir in the boiling water until the batter is well mixed. The batter will be thin, but thats okay. Bake: Pour the batter evenly into the prepared pans. Bake in the preheated oven for 30 to 35 minutes or until a toothpick inserted into the center comes out clean. Cool: Allow the cakes to cool in the pans for about 10 minutes, then transfer them to a wire rack to cool completely. Prepare the Frosting: In a medium bowl, beat the softened butter until creamy. Add the powdered sugar, cocoa powder, milk, vanilla extract, and a pinch of salt. Beat until smooth and creamy. Frost the Cake: Once the cakes are completely cool, spread a layer of frosting on top of one cake layer. Place the second cake layer on top and frost the entire cake. Decorate (Optional): You can decorate the cake with additional chocolate shavings, sprinkles, or other toppings if desired. Slice and Serve: Slice the cake and serve. Enjoy your delicious homemade chocolate cake!', 'http://localhost:3000/uploads/chocolate_cake.png', 120, 3, 4, 5),
    ('Strawberry Smoothie',4, 'Prepare Ingredients: Wash and hull the strawberries if fresh. Place the frozen strawberries, white rum, simple syrup, lime juice, and ice cubes in a blender. Blend: Blend the ingredients until smooth and creamy. If the consistency is too thick, you can add more ice or a splash of water. Taste and Adjust: Taste the smoothie and adjust the sweetness or acidity by adding more simple syrup or lime juice if needed. Pour and Garnish: Pour the strawberry daiquiri smoothie into glasses. Optionally, garnish each glass with a fresh strawberry on the rim or a slice of lime. Serve: Serve immediately and enjoy your refreshing alcoholic strawberry smoothie!', 'http://localhost:3000/uploads/strawberry_smoothie.png', 10, 1, 1, 13),
    ('Vegan Spaghetti Bolognese',5, 'Cook the Pasta: Cook the spaghetti according to the package instructions. Drain and set aside. Prepare the Sauce: In a large skillet or pan, heat the olive oil over medium heat. Add the chopped onion and garlic, sautéing until softened and fragrant. Add Vegetables: Add the grated carrot, chopped celery, red bell pepper, and grated zucchini to the skillet. Cook for about 5-7 minutes until the vegetables are softened.
    Add Mushrooms and Lentils: Stir in the chopped mushrooms and lentils. Cook for an additional 3-5 minutes. Add Tomato Sauce: Add the crushed tomatoes, tomato paste, dried oregano, dried basil, dried thyme, salt, black pepper, and red pepper flakes (if using). Stir well to combine. Simmer: Reduce the heat to low and let the sauce simmer for about 15-20 minutes, allowing the flavors to meld. If the sauce becomes too thick, you can add a splash of vegetable broth or water. Adjust Seasoning: Taste the sauce and adjust the seasoning if needed. Add more salt, pepper, or herbs to suit your taste. Serve: Spoon the vegan bolognese sauce over the cooked spaghetti. Garnish with fresh basil or parsley if desired. Enjoy! Serve your vegan spaghetti bolognese hot and enjoy a delicious and plant-based twist on a classic dish.', 'http://localhost:3000/uploads/vegan_spaghetti_bolognese.png', 45, 2, 4, 4),
    ('Plant-based Hamburger',1, 'Prepare Flax Egg: In a small bowl, mix together 1 tablespoon of ground flaxseed with 3 tablespoons of water. Let it sit for about 5 minutes until it forms a gel-like consistency, creating a flax egg. Mash Beans: In a large bowl, mash the black beans with a fork or potato masher, leaving some chunks for texture. Mix Ingredients: Add the cooked quinoa, breadcrumbs, finely chopped onion, minced garlic, cumin, smoked paprika, salt, pepper, and the flax egg to the mashed black beans. Mix everything well until combined. Form Patties: Divide the mixture into equal portions and shape them into burger patties. Cook Patties: Heat a skillet or grill pan over medium heat. Cook the patties for about 4-5 minutes on each side, or until they are golden brown and cooked through. Assemble Burgers: Toast the burger buns if desired. Place a patty on the bottom half of each bun. Add vegan cheese if using, and then top with lettuce, tomato, onion, pickles, or your favorite toppings. Add Condiments: Spread condiments like ketchup, mustard, and vegan mayonnaise on the top half of the bun. Serve: Place the top half of the bun on the assembled toppings, and your plant-based burgers are ready to be served.', 'http://localhost:3000/uploads/plant_based_hamburger.png', 60, 3, 4, 4),
    ('Garlic Cream Soup with Pan-Seared Shrimp',1, 'Sauté Vegetables: In a large pot, heat 2 tablespoons of olive oil over medium heat. Add the chopped onion and minced garlic, sautéing until softened. Add Broth and Vegetables: Pour in the vegetable or chicken broth. Add the diced potatoes and cauliflower florets. Bring the mixture to a boil, then reduce the heat and let it simmer until the vegetables are tender. Blend Creamy Base: In a blender, combine the soaked cashews and almond milk. Blend until smooth and creamy. Add this mixture to the soup pot and stir well. Allow the soup to simmer for an additional 5-7 minutes. Season: Season the soup with salt and pepper to taste. Adjust the seasoning as needed. Garnish: Garnish the soup with chopped fresh parsley just before serving. Prepare Shrimp: Pat the shrimp dry with paper towels. Season them with salt and pepper. Sear Shrimp: In a skillet, heat 2 tablespoons of olive oil over medium-high heat. Add the minced garlic and cook for about 30 seconds until fragrant. Add the seasoned shrimp to the skillet and cook for 2-3 minutes per side or until they are opaque and cooked through. Serve: Ladle the Garlic Cream Soup into bowls. Top each bowl with a few pan-seared shrimp. Squeeze lemon juice over the shrimp and soup just before serving. Enjoy: Serve the Garlic Cream Soup with Pan-Seared Shrimp immediately. Enjoy your comforting and flavorful meal!', 'http://localhost:3000/uploads/garlic_cream_soup_with_shrimp.png', 120, 3, 4, 1);

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
    (1, 3),
    (1, 5),
	(1, 7),
    (2, 3),
    (2, 4),
	(2, 5),
    (2, 7),
    (3, 3),
    (3, 4),
    (3, 8),
    (4, 1),
    (4, 2),
    (4, 3),
    (4, 4),
    (4, 5),
    (4, 6),
    (4, 7),
    (5, 1),
    (5, 2),
    (5, 3),
    (5, 4),
    (5, 6),
    (5, 7),
    (5, 9),
    (6, 2),
    (6, 3),
    (7, 1),
    (7, 2),
    (7, 3),
    (7, 4),
    (7, 5),
    (7, 6),
    (7, 7),
    (7, 10),
    (8, 1),
    (8, 2),
    (8, 3),
    (8, 4),
    (8, 8),
    (9, 1),
    (9, 2),
    (9, 3),
    (9, 4),
    (9, 5),
    (9, 6),
    (9, 7),
    (10, 3),
    (10, 4),
    (10, 6),
    (10, 11);

INSERT INTO ingredients (recipe_id, name)
VALUES
    (1, 'Eggs (2-4, depending on your preference and hunger)'),
    (1, 'Butter or cooking oil (1-2 tablespoons)'),
    (1, 'Salt (to taste)'),
    (1, 'Pepper (to taste)'),
    (1, 'Milk or cream (1-2 tablespoons, for creamier eggs)'),
    (1, 'Grated cheese (cheddar, feta, or your choice)'),
    (1, 'Chopped herbs (parsley, chives, or cilantro)'),
    (1, 'Diced vegetables (bell peppers, onions, tomatoes, or mushrooms)'),
    (2, 'Chicken breasts (2 boneless, skinless)'),
    (2, 'Olive oil (2 tablespoons)'),
    (2, 'Lemon juice (2 tablespoons)'),
    (2, 'Garlic (2 cloves, minced)'),
    (2, 'Dried oregano (1 teaspoon)'),
    (2, 'Salt and pepper (to taste)'),
    (2, 'Mixed salad greens (lettuce, spinach, arugula, etc.)'),
    (2, 'Cherry tomatoes (1 cup, halved)'),
    (2, 'Cucumber (1, sliced)'),
    (2, 'Red onion (1/2, thinly sliced)'),
    (2, 'Avocado (1, diced)'),
    (2, 'Feta cheese (1/2 cup, crumbled)'),
    (2, 'Olive oil (3 tablespoons)'),
    (2, 'Balsamic vinegar (2 tablespoons)'),
    (2, 'Dijon mustard (1 teaspoon)'),
    (2, 'Honey (1 teaspoon)'),
    (2, 'Salt and pepper (to taste)'),
    (2, 'Grilled bell peppers'),
    (3, 'Ground beef (or a mix of beef and pork) - 1 pound (about 450g)'),
    (3, 'Olive oil - 2 tablespoons'),
    (3, 'Onion - 1, finely chopped'),
    (3, 'Carrot - 1, finely chopped'),
    (3, 'Celery - 2 stalks, finely chopped'),
    (3, 'Garlic - 3 cloves, minced'),
    (3, 'Tomato paste - 2 tablespoons'),
    (3, 'Canned crushed tomatoes - 1 can (28 ounces or 800g)'),
    (3, 'Red wine - 1/2 cup (optional)'),
    (3, 'Beef or vegetable broth - 1/2 cup'),
    (3, 'Dried oregano - 1 teaspoon'),
    (3, 'Dried basil - 1 teaspoon'),
    (3, 'Salt - 1 teaspoon (adjust to taste)'),
    (3, 'Black pepper - 1/2 teaspoon (adjust to taste)'),
    (3, 'Sugar - 1 teaspoon (optional, to balance acidity)'),
    (3, 'Bay leaves - 2'),
    (3, 'Spaghetti - 1 pound (about 450g)'),
    (3, 'Grated Parmesan cheese - for serving'),
    (3, 'Fresh parsley - chopped, for garnish'),
    (4, '3 ripe avocados'),
    (4, '1 medium-sized tomato, diced'),
    (4, '1/2 cup finely chopped red onion'),
    (4, '1-2 cloves garlic, minced'),
    (4, '1-2 tablespoons fresh lime juice'),
    (4, '2 tablespoons fresh cilantro, chopped'),
    (4, 'Salt and pepper to taste'),
    (5, '1 cup frozen mixed berries (strawberries, blueberries, raspberries)'),
    (5, '1 ripe banana'),
    (5, '1/2 cup Greek yogurt (or a dairy-free alternative for a vegan option)'),
    (5, '1/2 cup orange juice'),
    (5, '1/2 cup almond milk (or any milk of your choice)'),
    (5, '1 tablespoon honey or maple syrup (optional, depending on your sweetness preference)'),
    (5, 'Ice cubes (optional)'),
    (6, '1 and 3/4 cups all-purpose flour'),
    (6, '3/4 cup unsweetened cocoa powder'),
    (6, '1 and 3/4 teaspoons baking powder'),
    (6, '1 and 3/4 teaspoons baking soda'),
    (6, '1 teaspoon salt'),
    (6, '2 cups granulated sugar'),
    (6, '2 large eggs'),
    (6, '1 cup whole milk'),
    (6, '1/2 cup vegetable oil'),
    (6, '2 teaspoons vanilla extract'),
    (6, '1 cup boiling water'),
    (6, '1 cup unsalted butter, softened'),
    (6, '2 and 1/2 cups powdered sugar'),
    (6, '1/2 cup unsweetened cocoa powder'),
    (6, '1/4 cup whole milk'),
    (6, '1 teaspoon vanilla extract'),
    (6, 'A pinch of salt'),
    (7, '2 cups frozen strawberries'),
    (7, '1/2 cup white rum'),
    (7, '2 tablespoons simple syrup (adjust based on your sweetness preference)'),
    (7, '1 tablespoon lime juice'),
    (7, '1 cup ice cubes'),
    (7, 'Fresh strawberries for garnish (optional)'),
    (7, 'Lime slices for garnish (optional)'),
    (8, '8 oz (about 225g) spaghetti (or your preferred pasta)'),
    (8, '1 tablespoon olive oil'),
    (8, '1 large onion, finely chopped'),
    (8, '2 cloves garlic, minced'),
    (8, '1 carrot, grated'),
    (8, '1 celery stalk, finely chopped'),
    (8, '1 red bell pepper, finely chopped'),
    (8, '1 zucchini, grated'),
    (8, '1 cup (about 200g) mushrooms, finely chopped'),
    (8, '1 can (14 oz/400g) lentils, drained and rinsed (or cooked green or brown lentils)'),
    (8, '1 can (14 oz/400g) crushed tomatoes'),
    (8, '2 tablespoons tomato paste'),
    (8, '1 teaspoon dried oregano'),
    (8, '1 teaspoon dried basil'),
    (8, '1/2 teaspoon dried thyme'),
    (8, 'Salt and black pepper to taste'),
    (8, 'Red pepper flakes (optional, for heat)'),
    (8, 'Fresh basil or parsley for garnish (optional)'),
    (9, '1 can (15 oz) black beans, drained and rinsed'),
    (9, '1 cup cooked quinoa'),
    (9, '1/2 cup breadcrumbs (ensure they are plant-based or gluten-free if needed)'),
    (9, '1/4 cup finely chopped onion'),
    (9, '2 cloves garlic, minced'),
    (9, '1 teaspoon ground cumin'),
    (9, '1 teaspoon smoked paprika'),
    (9, 'Salt and pepper to taste'),
    (9, '1 flax egg (1 tablespoon ground flaxseed mixed with 3 tablespoons water, let sit for 5 minutes)'),
    (9, 'Burger buns (choose plant-based or gluten-free buns if necessary)'),
    (9, 'Lettuce, tomato, onion, pickles, or your favorite burger toppings'),
    (9, 'Vegan cheese slices (optional)'),
    (9, 'Condiments such as ketchup, mustard, and vegan mayonnaise'),
    (10, '4 tablespoons olive oil'),
    (10, '1 onion, finely chopped'),
    (10, '4 cloves garlic, minced'),
    (10, '4 cups vegetable or chicken broth'),
    (10, '2 cups potatoes, peeled and diced'),
    (10, '1 cup cauliflower florets'),
    (10, '1 cup cashews, soaked in water for at least 4 hours (for creaminess)'),
    (10, '1 cup unsweetened almond milk (or any non-dairy milk)'),
    (10, 'Salt and pepper to taste'),
    (10, 'Fresh parsley, chopped (for garnish)'),
    (10, '1 pound (about 450g) large shrimp, peeled and deveined'),
    (10, '2 tablespoons olive oil'),
    (10, '3 cloves garlic, minced'),
    (10, 'Salt and pepper to taste'),
    (10, 'Lemon wedges (for serving)');
    