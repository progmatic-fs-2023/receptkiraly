import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const categoriesData = [
  {
    id: 1,
    name: 'Dinner',
    image: '/images/category_dinner.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
      { label: 'H!', color: 'red-600' },
    ],
  },
  {
    id: 2,
    name: 'Appetizer',
    image: '/images/category_appetizer.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
      { label: 'H!', color: 'red-600' },
    ],
  },
  {
    id: 3,
    name: 'Soup',
    image: '/images/category_soup.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
      { label: 'H!', color: 'red-600' },
    ],
  },
  {
    id: 4,
    name: 'Smoothie',
    image: '/images/category_smoothie.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
    ],
  },
  {
    id: 5,
    name: 'Vegan',
    image: '/images/category_vegan.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
      { label: 'H!', color: 'red-600' },
    ],
  },
  {
    id: 6,
    name: 'Cakes',
    image: '/images/category_cake.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
    ],
  },
  {
    id: 7,
    name: 'Salad',
    image: '/images/category_salad.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'H!', color: 'red-600' },
    ],
  },
  {
    id: 8,
    name: 'Pizza',
    image: '/images/category_pizza.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'H!', color: 'red-600' },
    ],
  },
  {
    id: 9,
    name: 'Cocktail',
    image: '/images/category_cocktail.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
    ],
  },
  {
    id: 10,
    name: 'Pasta',
    image: '/images/category_pasta.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'H!', color: 'red-600' },
    ],
  },
];

function Category({ category }) {
  const style = {
    padding: '10px 0 10px',
  };

  return (
    <div className="w-full mx-2 my-3">
      <Link to="/" className="focus:outline-none relative overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="transition-transform transform hover:brightness-150 focus:brightness-150"
        />
      </Link>
      <div className="w-full flex flex-row flex-nowrap justify-center items-center">
        {category.buttons.map((button) => (
          <Link key={button.label} to="/" className="focus:outline-none relative overflow-hidden">
            <button
              type="button"
              className={`round-button font-bold bg-${button.color} transition-transform transform hover:brightness-50 focus:brightness-50`}
            >
              {button.label}
            </button>
          </Link>
        ))}
      </div>
      <Link to="/" className="focus:outline-none relative overflow-hidden">
        <div className="features-row my-1 text-center font-bold transition-transform transform hover:brightness-110 focus:brightness-110" style={style}>
          {category.name}
        </div>
      </Link>
    </div>
  );
}

function Categories() {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categoriesData.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}


Category.propTypes = {
  category: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Categories;