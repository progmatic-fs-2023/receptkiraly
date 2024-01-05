import LabelSelector from '../components/LabelSelector';
import Button from '../components/Button';
import SearchResultRecepies from '../components/SearchResultRecepies';

function SearchRecipes() {
  return (
    <div className="flex">
      <div>
        <LabelSelector />
        <div className="text-center">
          <Button text="Search" />
        </div>
      </div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <SearchResultRecepies />
            <SearchResultRecepies />
            <SearchResultRecepies />
            <SearchResultRecepies />
          </div>
        </div>
      </section>
    </div>
  );
}
export default SearchRecipes;
