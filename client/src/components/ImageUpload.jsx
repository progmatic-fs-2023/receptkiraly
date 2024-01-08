import { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';
import NoImage from '../../public/no_image.svg';

function ImageUpload({ isLoggedIn }) {
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
        <div>
          <ResponsiveImage imgUrl={imgUrl} />
          {isLoggedIn ? (
            <label htmlFor="image">
              Upload image:
              <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
            </label>
          ) : null}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {isLoggedIn ? (
            <label htmlFor="image">
              Upload image:
              <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
            </label>
          ) : (
            <ResponsiveImage imgUrl={NoImage} />
          )}
        </div>
      )}
    </div>
  );
}

ImageUpload.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ImageUpload;
