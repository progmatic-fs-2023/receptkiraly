/* eslint-disable import/prefer-default-export */
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/';
export const TEMP_RECIPES = [
  {
    id: 1,
    name: 'Classic Spaghetti Bolognese',
    description: 'A delicious and hearty pasta dish with a rich tomato and meat sauce.',
  },
  {
    id: 2,
    name: 'Garlic Butter Shrimp Scampi',
    description: 'Juicy shrimp cooked in a flavorful garlic and butter sauce, served over pasta.',
  },
  {
    id: 3,
    name: 'Vegetarian Chickpea Curry',
    description:
      'A healthy and flavorful curry made with chickpeas, vegetables, and aromatic spices.',
  },
  {
    id: 4,
    name: 'Grilled Lemon Herb Chicken',
    description:
      'Tender chicken breasts marinated in a zesty lemon and herb mixture, then grilled to perfection.',
  },
  {
    id: 5,
    name: 'Chocolate Chip Cookies',
    description:
      'Classic homemade chocolate chip cookies with a perfect balance of chewiness and chocolate goodness.',
  },
];
export const API_URL_GET_RECIPES = 'https://jsonplaceholder.typicode.com/users';
