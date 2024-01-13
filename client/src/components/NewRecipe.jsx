import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function NewRecipe() {
    return (
      <div className="flex flex-col justify-between w-4/5 border p-4 rounded-md bg-gray-100 shadow m-2">
        <Link to="/register"><Button type="button" text="Post New Recipe"/></Link>
        </div>
  );
}

export default NewRecipe;