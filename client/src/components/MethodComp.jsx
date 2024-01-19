import PropTypes from 'prop-types';

function MethodComp({ editMode, description, setDescription, addClassName }) {
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      {editMode ? (
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            className={`w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClassName}`}
            value={description}
            onChange={handleDescriptionChange}
            rows={12}
            cols={60}
          />
        </label>
      ) : (
        <p className="flex mx-auto text-black">{description}</p>
      )}
    </div>
  );
}

MethodComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  addClassName: PropTypes.string,
};
MethodComp.defaultProps = {
  addClassName: '',
};
export default MethodComp;
