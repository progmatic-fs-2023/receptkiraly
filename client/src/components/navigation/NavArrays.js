import chef1 from './img/chefs/chef1.webp';
import chef2 from './img/chefs/chef2.webp';
import chef3 from './img/chefs/chef3.webp';
import chef4 from './img/chefs/chef4.webp';
import chef5 from './img/chefs/chef5.webp';
import chef6 from './img/chefs/chef6.webp';
import chef7 from './img/chefs/chef7.webp';

export const meals = [
  { key: 1, value: 'appetizer', label: 'Appetizer' },
  { key: 2, value: 'breakfast', label: 'Breakfast' },
  { key: 3, value: 'lunch', label: 'Lunch' },
  { key: 4, value: 'dinner', label: 'Dinner' },
];

export const desserts = [
  { key: 5, value: 'cakes', label: 'Cakes' },
  { key: 6, value: 'frozen_desserts', label: 'Frozen Desserts' },
  { key: 7, value: 'chocolate_and_candies', label: 'Chocolate and Candies' },
  { key: 8, value: 'fruit-desserts', label: 'Fruit Desserts' },
];

export const beverages = [
  { key: 9, value: 'hot_drinks', label: 'Hot Drinks' },
  { key: 10, value: 'cold_drinks', label: 'Cold Drinks' },
  { key: 11, value: 'soft_drinks', label: 'Soft Drinks' },
  { key: 12, value: 'juices', label: 'Juices' },
  { key: 13, value: 'smoothies', label: 'Smoothies' },
];

export const labels = [
  { key: 1, value: 'vegan', label: 'Vegan' },
  { key: 2, value: 'vegetarian', label: 'Vegetarian' },
  { key: 3, value: 'nut-free', label: 'Nut-Free' },
  { key: 4, value: 'egg-free', label: 'Egg-Free' },
  { key: 5, value: 'dairy-free', label: 'Diary-Free' },
  { key: 6, value: 'low-carb', label: 'Low-Carb' },
  { key: 7, value: 'spicy', label: 'Spicy' },
  { key: 8, value: 'alcoholic', label: 'Alcoholic' },
  { key: 9, value: 'non-alcoholic', label: 'Non-Alcoholic' },
  { key: 10, value: 'seafood', label: 'Seafood' },
];

export const chefsProf = [
  { key: 1, value: 'executive', label: 'Executive' },
  { key: 2, value: 'sous', label: 'Sous' },
  { key: 3, value: 'pastry', label: 'Pastry' },
  { key: 4, value: 'cold_kitchen', label: 'Cold kitchen' },
  { key: 5, value: 'saucier', label: 'Saucier' },
];

export const chefsAmateur = [
  { key: 1, value: 'dinner', label: 'Dinner' },
  { key: 2, value: 'soup', label: 'Soup' },
  { key: 3, value: 'italian', label: 'Italian' },
  { key: 4, value: 'fast', label: 'Fast' },
];

export const chefs = [
  {
    id: 1,
    key: 1,
    username: 'john_doe',
    label: 'Whisker Wendy',
    email: 'john@example.com',
    img: chef1,
  },
  {
    id: 2,
    key: 2,
    username: 'alice_smith',
    label: 'Giggles Gary',
    email: 'alice@example.com',
    img: chef2,
  },
  {
    id: 3,
    key: 3,
    username: 'bob_jones',
    label: 'Laughing Larry',
    email: 'bob@example.com',
    img: chef3,
  },
  {
    id: 4,
    key: 4,
    username: 'emma_wilson',
    label: 'Snicker Steve',
    email: 'emma@example.com',
    img: chef4,
  },
  {
    id: 5,
    key: 5,
    username: 'michael_brown',
    label: 'Jocular James',
    email: 'michael@example.com',
    img: chef5,
  },
  {
    id: 6,
    key: 6,
    username: 'demo',
    label: 'Chucke Charlie',
    email: 'demo@example.com',
    img: chef6,
  },
  {
    id: 7,
    key: 7,
    username: 'demo2',
    label: 'Humorous Hanna',
    email: 'demo2@example.com',
    img: chef7,
  },
];
