import { useState } from 'react';
import PropTypes from 'prop-types';

function MethodComp({ editMode }) {
  const [description, setDescription] = useState();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="p-8">
      <h1 className="flex mx-auto justify-center">Method:</h1>
      <div>
        {editMode ? (
          <textarea className="flex mx-auto bg-amber-300 text-trueGray-900" value={description} onChange={handleDescriptionChange} rows={12} cols={60} />
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
