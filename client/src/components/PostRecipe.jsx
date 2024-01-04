import { useState } from 'react';

function PostRecipe() {
  const [fileUpload, setFileUpload] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [labels, setLabels] = useState([]);
  const [description, setDescription] = useState('');
  const [recipeTitle, setRecipeTitle] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call
  };

  return (
    <div className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto bg-blue-400 bg-opacity-20 rounded-full">
        <form onSubmit={handleSubmit} className="lg:w-4/5 mx-auto flex flex-wrap">
          {fileUpload ? (
            <img
              src={previewImage}
              alt=""
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
          ) : (
            <div className="flex items-center justify-center">
              <label htmlFor="image">
                Upload image:
                <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
          )}

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Post your recipe!
            </h1>
            <p className="text-sm title-font text-gray-500 tracking-widest">Select labels:</p>
            <ul>
              <li>
                <label htmlFor="vegetarian">
                  <input
                    type="checkbox"
                    value="vegetarian"
                    checked={labels.includes('vegetarian')}
                    onChange={handleLabelChange}
                  />
                  Vegetarian
                </label>
              </li>
              <li>
                <label htmlFor="vegan">
                  <input
                    type="checkbox"
                    value="vegan"
                    checked={labels.includes('vegan')}
                    onChange={handleLabelChange}
                  />
                  Vegan
                </label>
              </li>
              <li>
                <label htmlFor="glutenfree">
                  <input
                    type="checkbox"
                    value="glutenfree"
                    checked={labels.includes('glutenfree')}
                    onChange={handleLabelChange}
                  />
                  Gluten-free
                </label>
              </li>
              <li>
                <label htmlFor="lactosefree">
                  <input
                    type="checkbox"
                    value="lactosefree"
                    checked={labels.includes('lactosefree')}
                    onChange={handleLabelChange}
                  />
                  Lactose-free
                </label>
              </li>
              <li>
                <label htmlFor="sugarfree">
                  <input
                    type="checkbox"
                    value="sugarfree"
                    checked={labels.includes('sugarfree')}
                    onChange={handleLabelChange}
                  />
                  Sugar-free
                </label>
              </li>
            </ul>

            <label htmlFor="recipe-title">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-1">Recipe title:</h2>
              <textarea
                id="recipe-title"
                className="w-full"
                value={recipeTitle}
                onChange={(event) => setRecipeTitle(event.target.value)}
                rows={1}
              />
            </label>

            <label htmlFor="description">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-1">Description:</h2>
              <textarea
                id="description"
                className="w-full"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={8}
              />
            </label>
            <button
              type="submit"
              className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mx-auto"
            >
              Post recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostRecipe;
