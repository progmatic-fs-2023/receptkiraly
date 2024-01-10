import SearchResultRecepies from '../components/SearchResultRecepies';
import SearchForm from '../components/SearchForm';

function SearchRecipes() {
  return (
    <section>
      <div className="bg-blue-500">
      <h1 className="p-8 text-white">Search</h1>
      </div>
      <SearchForm />
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
    </section>
  );
}
export default SearchRecipes;