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
          <li>
            <label htmlFor="vegan">
              <input
                type="checkbox"
                value="vegan"
                checked={labels.includes('vegan')}
                onChange={handleLabelChange}
              />
              Vegan
            </label>
          </li>
          <li>
            <label htmlFor="vegetarian">
              <input
                type="checkbox"
                value="vegetarian"
                checked={labels.includes('vegetarian')}
                onChange={handleLabelChange}
              />
              Vegetarian
            </label>
          </li>
          <li>
            <label htmlFor="nut-free">
              <input
                type="checkbox"
                value="nut-free"
                checked={labels.includes('nut-free')}
                onChange={handleLabelChange}
              />
              Nut-free
            </label>
          </li>
          <li>
            <label htmlFor="egg-free">
              <input
                type="checkbox"
                value="egg-free"
                checked={labels.includes('egg-free')}
                onChange={handleLabelChange}
              />
              Egg-free
            </label>
          </li>
          <li>
            <label htmlFor="dairy-free">
              <input
                type="checkbox"
                value="dairy-free"
                checked={labels.includes('dairy-free')}
                onChange={handleLabelChange}
              />
              Dairy-free
            </label>
          </li>
          <li>
            <label htmlFor="gluten-free">
              <input
                type="checkbox"
                value="gluten-free"
                checked={labels.includes('gluten-free')}
                onChange={handleLabelChange}
              />
              Gluten-free
            </label>
          </li>
          <li>
            <label htmlFor="low-carb">
              <input
                type="checkbox"
                value="low-carb"
                checked={labels.includes('low-carb')}
                onChange={handleLabelChange}
              />
              Low-carb
            </label>
          </li>
          <li>
            <label htmlFor="spicy">
              <input
                type="checkbox"
                value="spicy"
                checked={labels.includes('spicy')}
                onChange={handleLabelChange}
              />
              Spicy
            </label>
          </li>
          <li>
            <label htmlFor="alcoholic">
              <input
                type="checkbox"
                value="alcoholic"
                checked={labels.includes('alcoholic')}
                onChange={handleLabelChange}
              />
              Alcoholic
            </label>
          </li>
          <li>
            <label htmlFor="non-alcoholic">
              <input
                type="checkbox"
                value="non-alcoholic"
                checked={labels.includes('non-alcoholic')}
                onChange={handleLabelChange}
              />
              Non-alcoholic
            </label>
          </li>
          <li>
            <label htmlFor="seafood">
              <input
                type="checkbox"
                value="seafood"
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
