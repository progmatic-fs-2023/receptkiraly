import React from 'react';
import Button from './Button';

function MyRecipes() {
  return (
    <div className="flex flex-col justify-between w-4/5 border p-4 rounded-md bg-gray-100 shadow m-2">
      <h2 className="text-2xl font-bold mb-4">Recipe #1</h2>
      <div className="flex mt-1 mb-1">
        <div className="w-1/5">
          <img src="https://placekitten.com/200/200" alt="Recipe" className="w-full h-auto" />
        </div>
        <div className="w-4/5 p-4 bg-white rounded-md shadow ml-1">
          <p className="text-md font-bold text-gray-800">Description</p>
        </div>
      </div>

      <div className="w-full p-4 bg-white rounded-md shadow mt-1">
        <h3 className="text-md font-bold">Labels</h3>
      </div>

      <div className="flex justify-center mt-4">
        <div className="w-1/2 text-center">
          <Button type="button" text="Edit" />
        </div>
        <div className="w-1/2 text-center">
          <Button type="button" text="Delete" />
        </div>
      </div>
    </div>
  );
}

export default MyRecipes;
