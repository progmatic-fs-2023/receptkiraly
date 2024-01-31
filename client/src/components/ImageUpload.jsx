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
      reader.onload = () => {
        setImgUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
        <ResponsiveImage imgUrl={imgUrl} />
      {editMode && (
        <label className="my-2 inline-block text-neutral-700 dark:text-neutral-200" htmlFor="image">
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="image"
            onChange={handleImageUpload}
            accept="image/*"
            alt={imageName}
          />
        </label>
      )}
    </div>
  );
}

ImageUpload.propTypes = {
  editMode: PropTypes.bool.isRequired,
  fileUpload: PropTypes.instanceOf(File),
  setFileUpload: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  setImgUrl: PropTypes.func.isRequired,
};
ImageUpload.defaultProps = {
  fileUpload: null,
  imgUrl: '/images/no_image.svg',
};
export default ImageUpload;
