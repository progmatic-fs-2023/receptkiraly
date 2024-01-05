import LabelSelector from '../components/LabelSelector';
import Button from '../components/Button';
import SearchResultContainer from '../components/SearchResultContainer';

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
        <SearchResultContainer />
      </div>
    </div>
  );
}
export default SearchRecipes;
