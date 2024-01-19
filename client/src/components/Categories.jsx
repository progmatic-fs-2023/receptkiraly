import React from 'react';

function Categories() {
    const style = {
        padding: "10px 0 10px",
      };
  return (
    <div className="w-full flex flex-col items-start">
    <div className="w-full flex flex-col lg:flex-row justify-between items-start">
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_dinner.png" alt="Dinner" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Dinner</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_appetizer.png" alt="Appetizer" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Appetizer</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_soup.png" alt="Soup" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Soup</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_smoothie.png" alt="Smoothie" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Smoothie</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_vegan.png" alt="Vegan" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Vegan</div>
      </div>
    </div>
    <div className="w-full flex flex-col lg:flex-row justify-between items-start">
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_cake.png" alt="Cakes" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Cake</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_salad.png" alt="Salad" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Salad</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_pizza.png" alt="Pizza" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Pizza</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_cocktail.png" alt="Cocktail" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-teal-400">NS</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Cocktail</div>
      </div>
      <div className="w-full lg:w-1/5 mx-2 my-3">
        <img src="/images/category_pasta.png" alt="Pasta" />
        <div className="w-full flex flex-row flex-nowrap justify-center items-center"><button type="button" className="round-button font-bold bg-orange-900">GF</button><button type="button" className="round-button font-bold bg-yellow-400">VG</button><button type="button" className="round-button font-bold bg-green-500">V</button><button type="button" className="round-button font-bold bg-red-300">DF</button><button type="button" className="round-button font-bold bg-red-600">H!</button></div>
        <div className="features-row my-1 text-center font-bold" style={style}>Pasta</div>
      </div>
    </div>
    </div>
  );
}

export default Categories;