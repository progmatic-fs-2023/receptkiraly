import { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';

function ImageUpload({ editMode }) {
  const [fileUpload, setFileUpload] = useState();
  const [imgUrl, setImgUrl] = useState();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

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
    <div>
      {fileUpload ? (
        <div className="w-1/2 sm:w-full">
          <ResponsiveImage imgUrl={imgUrl} />
          {editMode ? (
            <label htmlFor="image">
              Change image:
              <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
            </label>
          ) : null}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {editMode ? (
            <label htmlFor="image">
              Upload image:
              <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
            </label>
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
};

export default ImageUpload;
