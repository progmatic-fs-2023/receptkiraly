import PropTypes from 'prop-types';

function LabelsComp({ editMode, labels, setLabels }) {
  const handleLabelChange = (event) => {
    const selectedLabel = event.target.value;
    setLabels((prevLabels) =>
      prevLabels.includes(selectedLabel)
        ? prevLabels.filter((label) => label !== selectedLabel)
        : [...prevLabels, selectedLabel],
    );
  };

  return (
    <div>
      {editMode ? (
        <ul className="flex flex-wrap">
          <li className="p-3 title-font sm:text-1xl text-xl font-medium text-gray-900 mb-3 ">
            <label htmlFor="vegan">
              <input
                type="checkbox"
                value="vegan"
                id="vegan"
                checked={labels.includes('vegan')}
                onChange={handleLabelChange}
              />
              Vegan
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="vegetarian">
              <input
                type="checkbox"
                value="vegetarian"
                id="vegetarian"
                checked={labels.includes('vegetarian')}
                onChange={handleLabelChange}
              />
              Vegetarian
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="nut-free">
              <input
                type="checkbox"
                value="nut-free"
                id="nut-free"
                checked={labels.includes('nut-free')}
                onChange={handleLabelChange}
              />
              Nut-free
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="egg-free">
              <input
                type="checkbox"
                value="egg-free"
                id="egg-free"
                checked={labels.includes('egg-free')}
                onChange={handleLabelChange}
              />
              Egg-free
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="dairy-free">
              <input
                type="checkbox"
                value="dairy-free"
                id="dairy-free"
                checked={labels.includes('dairy-free')}
                onChange={handleLabelChange}
              />
              Dairy-free
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="gluten-free">
              <input
                type="checkbox"
                value="gluten-free"
                id="gluten-free"
                checked={labels.includes('gluten-free')}
                onChange={handleLabelChange}
              />
              Gluten-free
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="low-carb">
              <input
                type="checkbox"
                value="low-carb"
                id="low-carb"
                checked={labels.includes('low-carb')}
                onChange={handleLabelChange}
              />
              Low-carb
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="spicy">
              <input
                type="checkbox"
                value="spicy"
                id="spicy"
                checked={labels.includes('spicy')}
                onChange={handleLabelChange}
              />
              Spicy
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="alcoholic">
              <input
                type="checkbox"
                value="alcoholic"
                id="alcoholic"
                checked={labels.includes('alcoholic')}
                onChange={handleLabelChange}
              />
              Alcoholic
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="non-alcoholic">
              <input
                type="checkbox"
                value="non-alcoholic"
                id="non-alcoholic"
                checked={labels.includes('non-alcoholic')}
                onChange={handleLabelChange}
              />
              Non-alcoholic
            </label>
          </li>
          <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            <label htmlFor="seafood">
              <input
                type="checkbox"
                value="seafood"
                id="seafood"
                checked={labels.includes('seafood')}
                onChange={handleLabelChange}
              />
              Seafood
            </label>
          </li>
        </ul>
      ) : (
        <div className="flex">
          {labels.map((label) => (
            <div className="m-1 p-1 border-solid border-2 border-orange-400 rounded-lg">
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

LabelsComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  labels: PropTypes.string.isRequired,
  setLabels: PropTypes.func.isRequired,
};

export default LabelsComp;
