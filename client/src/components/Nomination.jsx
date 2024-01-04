import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LikeBadge from './LikeBadge';
import { API_URL } from '../constants';

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
      {isStart ? <LikeBadge likeCount={99} isStart /> : null}
    </div>
  );
}
Nomination.propTypes = {
  id: PropTypes.number.isRequired,
  isStart: PropTypes.bool.isRequired,
};
export default Nomination;
