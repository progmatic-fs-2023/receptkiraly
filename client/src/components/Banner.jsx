function Banner() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-row">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black ml-2 mr-2">Recipe King</h1>
      </div>  
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Search
        </button>
      </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Button 1
        </button>
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Button 2
        </button>
      </div>
    </div>
  );
}

export default Banner;