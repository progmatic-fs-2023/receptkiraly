import Logo from '../assets/Logo.png';

function Banner() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-col md:flex-row justify-between py-6 sm:h-28">
      <div className="sm:hidden">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Recipe King" className="logo" />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-1"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="hidden sm:flex w-full md:w-3/4 justify-start sm:items-end">
        <div className="flex items-center">
          <img src={Logo} alt="Recipe King" className="logo" />
        </div>
        <div className="flex items-end mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-1"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center sm:mt-4 md:mt-0">
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
