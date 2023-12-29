import React from 'react';
import { Link } from 'react-router-dom';

function NewRecipe() {
    return (
      <div className="flex flex-col justify-between w-4/5 border p-4 rounded-md bg-gray-100 shadow m-2">
        <Link to="/register" className="text-xl text-center hover:underline">&lt;- Post new recipe</Link>
        </div>
  );
}

export default NewRecipe;