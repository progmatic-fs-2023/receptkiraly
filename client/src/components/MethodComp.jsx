import { useState } from 'react';
import PropTypes from 'prop-types';

function MethodComp({ isLoggedIn }) {
  const [description, setDescription] = useState();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h1>Method:</h1>
      <div>
        {isLoggedIn ? (
          <textarea value={description} onChange={handleDescriptionChange} />
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}

MethodComp.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default MethodComp;
