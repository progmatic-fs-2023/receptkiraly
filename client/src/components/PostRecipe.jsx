import { useState } from 'react';

function PostRecipe() {
  const [fileUpload, setFileUpload] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [labels, setLabels] = useState([]);
  const [description, setDescription] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileUpload(file);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleLabelChange = (event) => {
    const selectedLabel = event.target.value;
    setLabels((prevLabels) =>
      prevLabels.includes(selectedLabel)
        ? prevLabels.filter((label) => label !== selectedLabel)
        : [...prevLabels, selectedLabel],
    );
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call
  };

  return (
    <div>
      <h2>Post your recipe!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {fileUpload ? (
            <img src={previewImage} alt="" />
          ) : (
            <label htmlFor="image">
              Upload image:
              <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
            </label>
          )}
        </div>

        <div>
          <p>Select labels:</p>
          <label htmlFor="vegetarian">
            <input
              type="checkbox"
              value="vegetarian"
              checked={labels.includes('vegetarian')}
              onChange={handleLabelChange}
            />
            Vegetarian
          </label>

          <label htmlFor="vegan">
            <input
              type="checkbox"
              value="vegan"
              checked={labels.includes('vegan')}
              onChange={handleLabelChange}
            />
            Vegan
          </label>

          <label htmlFor="glutenfree">
            <input
              type="checkbox"
              value="glutenfree"
              checked={labels.includes('glutenfree')}
              onChange={handleLabelChange}
            />
            Gluten-free
          </label>

          <label htmlFor="lactosefree">
            <input
              type="checkbox"
              value="lactosefree"
              checked={labels.includes('lactosefree')}
              onChange={handleLabelChange}
            />
            Lactose-free
          </label>

          <label htmlFor="sugarfree">
            <input
              type="checkbox"
              value="sugarfree"
              checked={labels.includes('sugarfree')}
              onChange={handleLabelChange}
            />
            Sugar-free
          </label>
        </div>

        <div>
          <label htmlFor="description">
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              rows={15}
              cols={50}
            />
            Description:
          </label>
        </div>

        <button
          type="submit"
          className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Post recipe
        </button>
      </form>
    </div>
  );
}

export default PostRecipe;
