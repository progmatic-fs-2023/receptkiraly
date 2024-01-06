function Banner() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-row">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black mx-2">Recipe King</h1>
      </div>  
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-1"
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        >
          Search
        </button>
      </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none mx-1 jasmine"
        >
          Sign In
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none mx-1 jasmine"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Banner;