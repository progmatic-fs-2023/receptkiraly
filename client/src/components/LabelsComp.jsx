import PropTypes from 'prop-types';
import Select from 'react-select';
import { useState } from 'react';

function LabelsComp({ editMode, labels, setLabels }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleLabelChange = (event) => {
  //   const selectedLabel = event.target.value;
  //   setLabels((prevLabels) =>
  //     prevLabels.includes(selectedLabel)
  //       ? prevLabels.filter((label) => label !== selectedLabel)
  //       : [...prevLabels, selectedLabel],
  //   );
  // };

  const selectOption = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'nut-free', label: 'Nut-free' },
    { value: 'egg-free', label: 'Egg-free' },
    { value: 'diary-free', label: 'Diary-free' },
    { value: 'gluten-free', label: 'Gluten-free' },
    { value: 'low-carb', label: 'Low-carb' },
    { value: 'spicy', label: 'Spicy' },
    { value: 'alcholic', label: 'Alcoholic' },
    { value: 'non-alcoholic', label: 'Non-alcoholic' },
    { value: 'seafood', label: 'Seafood' },
  ];

  const handleSelectChange = (selectedOptionsValue) => {
    setSelectedOptions(selectedOptionsValue);
  };
  console.log(selectedOptions);

  const customStyles = {
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
      background: '#172554',
      fontSize: '20px',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      background: 'orange',
      ':hover': {
        background: 'red',
      },
    }),
    input: (provided) => ({
      ...provided,
      fontSize: '20px',
    }),
  };

  return (
    <div className="flex-grow">
      {editMode ? (
        <Select
          defaultValue={[selectOption[1], selectOption[2]]}
          isMulti
          name="colors"
          options={selectOption}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSelectChange}
          styles={customStyles}
        />
      ) : (
        // <ul className="flex flex-wrap">
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="vegan">
        //       <input
        //         type="checkbox"
        //         value="vegan"
        //         id="vegan"
        //         checked={labels.includes('vegan')}
        //         onChange={handleLabelChange}
        //       />
        //       Vegan
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="vegetarian">
        //       <input
        //         type="checkbox"
        //         value="vegetarian"
        //         id="vegetarian"
        //         checked={labels.includes('vegetarian')}
        //         onChange={handleLabelChange}
        //       />
        //       Vegetarian
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="nut-free">
        //       <input
        //         type="checkbox"
        //         value="nut-free"
        //         id="nut-free"
        //         checked={labels.includes('nut-free')}
        //         onChange={handleLabelChange}
        //       />
        //       Nut-free
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="egg-free">
        //       <input
        //         type="checkbox"
        //         value="egg-free"
        //         id="egg-free"
        //         checked={labels.includes('egg-free')}
        //         onChange={handleLabelChange}
        //       />
        //       Egg-free
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="dairy-free">
        //       <input
        //         type="checkbox"
        //         value="dairy-free"
        //         id="dairy-free"
        //         checked={labels.includes('dairy-free')}
        //         onChange={handleLabelChange}
        //       />
        //       Dairy-free
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="gluten-free">
        //       <input
        //         type="checkbox"
        //         value="gluten-free"
        //         id="gluten-free"
        //         checked={labels.includes('gluten-free')}
        //         onChange={handleLabelChange}
        //       />
        //       Gluten-free
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="low-carb">
        //       <input
        //         type="checkbox"
        //         value="low-carb"
        //         id="low-carb"
        //         checked={labels.includes('low-carb')}
        //         onChange={handleLabelChange}
        //       />
        //       Low-carb
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="spicy">
        //       <input
        //         type="checkbox"
        //         value="spicy"
        //         id="spicy"
        //         checked={labels.includes('spicy')}
        //         onChange={handleLabelChange}
        //       />
        //       Spicy
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="alcoholic">
        //       <input
        //         type="checkbox"
        //         value="alcoholic"
        //         id="alcoholic"
        //         checked={labels.includes('alcoholic')}
        //         onChange={handleLabelChange}
        //       />
        //       Alcoholic
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="non-alcoholic">
        //       <input
        //         type="checkbox"
        //         value="non-alcoholic"
        //         id="non-alcoholic"
        //         checked={labels.includes('non-alcoholic')}
        //         onChange={handleLabelChange}
        //       />
        //       Non-alcoholic
        //     </label>
        //   </li>
        //   <li className="p-3 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        //     <label htmlFor="seafood">
        //       <input
        //         type="checkbox"
        //         value="seafood"
        //         id="seafood"
        //         checked={labels.includes('seafood')}
        //         onChange={handleLabelChange}
        //       />
        //       Seafood
        //     </label>
        //   </li>
        // </ul>

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
