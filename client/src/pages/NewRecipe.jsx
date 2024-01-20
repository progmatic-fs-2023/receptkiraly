import React from 'react';
import DetailedRecipe from '../components/DetailedRecipe';

function NewRecipe() {
  const editMode = true;
  return (
    <section className="container mx-auto my-2">
      <DetailedRecipe editMode={editMode} />
    </section>
  );
}

export default NewRecipe;
