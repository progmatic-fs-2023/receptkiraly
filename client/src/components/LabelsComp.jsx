import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { labels } from './navigation/NavArrays';
import Badge from './Badge';

function LabelsComp({ editMode, selectedOptions, setSelectedOptions }) {
  const selectOption = labels;
  const [defaultLabels, setDefaultLabels] = useState([]);

  useEffect(() => {
    const updateDefaultLabels = selectOption.filter((option) =>
      selectedOptions.includes(option.value),
    );
    setDefaultLabels(updateDefaultLabels);
  }, [selectedOptions]);

  const handleSelectChange = (selectedOptionsValue) => {
    const selectedLabelValues = [];

    for (let i = 0; i <= selectedOptionsValue.length - 1; i += 1) {
      selectedLabelValues.push(selectedOptionsValue[i].value);
    }
    setSelectedOptions(selectedLabelValues);
  };

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
          isMulti
          name="colors"
          options={selectOption}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSelectChange}
          styles={customStyles}
          value={defaultLabels}
        />
      ) : (
        <div className="flex flex-wrap flex-row justify-start items-center">
          {selectedOptions.map((label, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Badge key={`label-${index}`} label={label} />
          ))}
        </div>
      )}
    </div>
  );
}

LabelsComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
};

export default LabelsComp;
