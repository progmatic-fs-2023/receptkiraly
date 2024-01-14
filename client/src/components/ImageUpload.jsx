import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';

function ImageUpload({ editMode, fileUpload, setFileUpload, imgUrl }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileUpload(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {fileUpload ? (
        <div>
          <ResponsiveImage imgUrl={imgUrl} />
          {editMode ? (
            <label htmlFor="image">
              Change image:
              <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
            </label>
          ) : null}
        </div>
      ) : (
        <div>
          {editMode ? (
            <div>
              <ResponsiveImage imgUrl="/images/no_image.svg" />
              <label htmlFor="image">
                Upload image:
                <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
          ) : (
            <ResponsiveImage imgUrl="/images/no_image.svg" />
          )}
        </div>
      )}
    </div>
  );
}

ImageUpload.propTypes = {
  editMode: PropTypes.bool.isRequired,
  fileUpload: PropTypes.string.isRequired,
  setFileUpload: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default ImageUpload;
