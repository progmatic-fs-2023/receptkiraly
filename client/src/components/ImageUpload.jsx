import { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';

function ImageUpload({ editMode, fileUpload, setFileUpload, imgUrl, setImgUrl }) {
  const [imageName, setImageName] = useState();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    setImageName(file.name);

    if (file) {
      setFileUpload(file);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-center">
      {fileUpload ? (
        <div>
          <ResponsiveImage imgUrl={imgUrl} />
          {editMode ? (
            <label htmlFor="image">
              <p>{imageName}</p>
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
  setImgUrl: PropTypes.func.isRequired,
};

export default ImageUpload;
