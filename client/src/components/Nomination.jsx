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
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 inline-block py-1 translate-x-[60px]">
          <span className="bg-white p-0.5 rounded">100 🩷</span>
        </div>
      )}
      <img
        className={`object-cover w-full h-96 md:h-auto md:w-48 ${
          isStart ? 'md:rounded-s-lg' : 'md:rounded-e-lg'
        }`}
        src={nominationData.imgUrl}
        alt=""
      />
      {isStart ? (
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 py-1 translate-x-[-60px]">
          <span className="bg-white p-0.5 rounded-lg">100 🩷</span>
        </div>
      ) : null}
    </div>
  );
}

export default Nomination;
