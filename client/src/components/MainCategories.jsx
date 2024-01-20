import React from 'react';
import { Link } from 'react-router-dom';

const categoriesData = [
  {
    id: 1,
    name: 'Meals',
    image: '/images/meal.png',
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
    name: 'Desserts',
    image: '/images/dessert.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
    ],
  },
  {
    id: 3,
    name: 'Beverages',
    image: '/images/beverage.png',
    buttons: [
      { label: 'GF', color: 'orange-900' },
      { label: 'VG', color: 'yellow-400' },
      { label: 'V', color: 'green-500' },
      { label: 'DF', color: 'red-300' },
      { label: 'NS', color: 'teal-400' },
      { label: 'H!', color: 'red-600' },
    ],
  },
];

function MainCategories() {
  const style = {
    padding: '10px 0 10px',
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start">
      {categoriesData.map((category) => (
        <div key={category.id} className="w-full lg:w-1/3 mx-2 my-3">
          <Link to="/" className="focus:outline-none relative overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="transition-transform transform hover:brightness-150 focus:brightness-150"
            />
          </Link>
          <div className="w-full flex flex-row flex-nowrap justify-center items-center">
            {category.buttons.map((button) => (
              <Link
                key={button.label}
                to="/"
                className="focus:outline-none relative overflow-hidden"
              >
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
            <div
              className="features-row my-1 text-center font-bold transition-transform transform hover:brightness-110 focus:brightness-110"
              style={style}
            >
              {category.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MainCategories;
