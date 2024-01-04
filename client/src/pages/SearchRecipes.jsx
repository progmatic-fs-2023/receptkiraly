import LabelSelector from '../components/LabelSelector';
import Button from '../components/Button';
import SearchResults from '../components/SearchResult';

function SearchRecipes() {
  return (
    <div className="flex">
      <div>
        <LabelSelector />
        <div className="text-center">
          <Button text="Search" />
        </div>
      </div>
      <div>
        <SearchResults />
      </div>
    </div>
  );
}
export default SearchRecipes;
