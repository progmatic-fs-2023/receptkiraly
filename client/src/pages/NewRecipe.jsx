import PostNewRecipe from '../components/PostNewRecipe';
import useRecipeCardModal from '../hooks/useRecipeCardModal';

function NewRecipe() {
  const editMode = true;

  const { stateObject } = useRecipeCardModal();

  return (
    <section className="container mx-auto my-2">
      <PostNewRecipe editMode={editMode} stateObject={stateObject} />
    </section>
  );
}

export default NewRecipe;
