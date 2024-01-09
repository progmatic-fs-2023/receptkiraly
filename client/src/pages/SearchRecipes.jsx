import SearchResultRecepies from '../components/SearchResultRecepies';
import SearchBar from '../components/SearchBar';
import SearchFilter from '../components/SearchFilter';

function SearchRecipes() {
  return (
    <div>
      <div className="bg-blue-500">
      <SearchBar />
      </div>
      <div>
      <SearchFilter />
      </div>
    <div className="flex">
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
    </div>
  );
}
export default SearchRecipes;
