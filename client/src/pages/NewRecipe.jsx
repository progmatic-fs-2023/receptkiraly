import useRecipeCardModal from '../hooks/useRecipeCardModal';
import DetailedRecipe from '../components/DetailedRecipe';

function NewRecipe() {
  const { stateObject, closeModal } = useRecipeCardModal();

  return (
    <section className="container mx-auto my-2">
      <DetailedRecipe editMode stateObject={stateObject} closeModal={closeModal} />
    </section>
  );
}

export default NewRecipe;
