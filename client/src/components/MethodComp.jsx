import { useState } from 'react';
import PropTypes from 'prop-types';

function MethodComp({ editMode }) {
  const [description, setDescription] = useState();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="p-10">
      <h1>Method:</h1>
      <div>
        {editMode ? (
          <textarea value={description} onChange={handleDescriptionChange} rows={12} cols={60} />
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}

MethodComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
};

export default MethodComp;
