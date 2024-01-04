import { useState, useEffect } from 'react';
import LikeBadge from './LikeBadge';
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
      {isStart ? null : <LikeBadge likeCount={100} isStart={false} />}
      <img
        className={`object-cover w-full h-96 md:h-auto md:w-48 ${
          isStart ? 'rounded-t-lg md:rounded-s-lg' : 'rounded-b-lg md:rounded-e-lg'
        }`}
        src={nominationData.imgUrl}
        alt=""
      />
      {isStart ? <LikeBadge likeCount={99} isStart={true} /> : null}
    </div>
  );
}

export default Nomination;
