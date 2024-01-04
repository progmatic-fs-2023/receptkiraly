import { useState, useEffect } from 'react';

function Nomination({ id, isStart }) {
  const [nominationData, setNominationData] = useState({
    id: 12,
    imgUrl:
      'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg',
  });
  useEffect(() => {
    const fetchNominationData = async () => {
      const response = await fetch(`${API_URL}/nominations/${id}`);
      const data = await response.json();
      setNominationData(data);
    };
    fetchNominationData();
  }, []);
  return (
    <div className="flex ">
      {isStart ? null : (
        <>
          <div className="hidden md:block mb-3 font-normal text-gray-700 dark:text-gray-400 py-1 translate-x-[60px]">
            <span className="bg-white p-0.5 rounded">100 🩷</span>
          </div>
          <div className="relative">
            <span className="md:hidden absolute top-2 w-16 text-center left-2 bg-white p-0.5 rounded">
              100 🩷
            </span>
          </div>
        </>
      )}
      <img
        className={`object-cover w-full h-96 md:h-auto md:w-48 ${
          isStart ? 'rounded-t-lg md:rounded-s-lg' : 'rounded-b-lg md:rounded-e-lg'
        }`}
        src={nominationData.imgUrl}
        alt=""
      />
      {isStart ? (
        <>
          <div className="hidden md:block mb-3 font-normal text-gray-700 dark:text-gray-400 py-1 translate-x-[-60px]">
            <span className="bg-white p-0.5 rounded">100 🩷</span>
          </div>
          <div className="relative">
            <span className="md:hidden absolute bottom-2 w-16 text-center right-2 bg-white p-0.5 rounded">
              100 🩷
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Nomination;
