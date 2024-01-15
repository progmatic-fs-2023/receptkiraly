import PropTypes from 'prop-types';

function MethodComp({ editMode, description, setDescription }) {
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="p-8">
      <h1 className="flex mx-auto justify-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Method:
      </h1>
      <div>
        {editMode ? (
          <textarea
            className="flex mx-auto bg-orange-300 text-black p-2 text-xl"
            value={description}
            onChange={handleDescriptionChange}
            rows={12}
            cols={60}
          />
        ) : (
          <p className="flex mx-auto bg-amber-300 text-black">{description}</p>
        )}
      </div>
    </div>
  );
}

MethodComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default MethodComp;
