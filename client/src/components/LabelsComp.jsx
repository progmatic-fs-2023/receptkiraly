import { useState } from 'react';
import PropTypes from 'prop-types';

function LabelsComp({ isLoggedIn }) {
  const [labels, setLabels] = useState([]);

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
      {isLoggedIn ? (
        <ul>
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
            <label htmlFor="glutenfree">
              <input
                type="checkbox"
                value="glutenfree"
                checked={labels.includes('glutenfree')}
                onChange={handleLabelChange}
              />
              Gluten-free
            </label>
          </li>
          <li>
            <label htmlFor="lactosefree">
              <input
                type="checkbox"
                value="lactosefree"
                checked={labels.includes('lactosefree')}
                onChange={handleLabelChange}
              />
              Lactose-free
            </label>
          </li>
          <li>
            <label htmlFor="sugarfree">
              <input
                type="checkbox"
                value="sugarfree"
                checked={labels.includes('sugarfree')}
                onChange={handleLabelChange}
              />
              Sugar-free
            </label>
          </li>
        </ul>
      ) : (
        <div>{labels.map((label) => label)}</div>
      )}
    </div>
  );
}

LabelsComp.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default LabelsComp;
