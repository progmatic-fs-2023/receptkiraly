import React from 'react';

function MainCategories() {
    const style = {
        padding: "10px 0 10px",
      };
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start">
      <div className="w-full lg:w-1/3 mx-2 my-3">
        <img src="/images/meal.png" alt="Meals" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Meals</div>
      </div>
      <div className="w-full lg:w-1/3 mx-2 my-3">
        <img src="/images/dessert.png" alt="Desserts" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Desserts</div>
      </div>
      <div className="w-full lg:w-1/3 mx-2 my-3">
        <img src="/images/beverage.png" alt="Beverages" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Beverages</div>
      </div>
    </div>
  );
}

export default MainCategories;
