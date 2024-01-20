import { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';

function ImageUpload({ editMode, fileUpload, setFileUpload, imgUrl, setImgUrl }) {
  const [imageName, setImageName] = useState(fileUpload ? fileUpload.name : 'No file chosen');
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageName(file ? file.name : 'No file chosen');

    if (file) {
      setFileUpload(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center m-5 lg:mx-3">
      <div className="flex flex-col items-center lg:items-start">
        <ResponsiveImage imgUrl={imgUrl || '/images/no_image.svg'} />
        {editMode && (
          <label htmlFor="image">
            {fileUpload ? 'Change image:' : 'Upload image:'}
            <input
              type="file"
              id="image"
              onChange={handleImageUpload}
              accept="image/*"
              alt={imageName}
            />
          </label>
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  editMode: PropTypes.bool.isRequired,
  fileUpload: PropTypes.instanceOf(File),
  setFileUpload: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  setImgUrl: PropTypes.func.isRequired,
};
ImageUpload.defaultProps = {
  fileUpload: null,
};
export default ImageUpload;
