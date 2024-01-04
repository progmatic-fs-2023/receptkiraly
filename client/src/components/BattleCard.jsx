import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API_URL } from '../constants';
import Nomination from './Nomination';

function BattleCard({ battleId }) {
  const [userDidVote, setUserDidVote] = useState(false);
  const [battleData, setBattleData] = useState({
    id: 1,
    title: 'Cake of 2024',
    idNominationA: 12,
    idNominationB: 23,
  });
  useEffect(() => {
    const fetchBattleData = async () => {
      const response = await fetch(`${API_URL}/battles/${battleId}`);
      const data = await response.json();
      setBattleData(data);
    };
    fetchBattleData();
  }, []);

  return (
    <div
      className={`flex flex-col items-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 justify-between ${
        userDidVote ? 'pointer-events-none bg-green-50' : ''
      }`}
    >
      <Nomination id={battleData.idNominationA} isStart onVote={setUserDidVote} />
      <div className="flex flex-col justify-center p-4 leading-normal text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {battleData.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {userDidVote ? 'Thank you, your vote has been sent' : 'Vote by clicking on the image'}
        </p>
      </div>
      <Nomination id={battleData.idNominationB} isStart={false} onVote={setUserDidVote} />
    </div>
  );
}

BattleCard.propTypes = {
  battleId: PropTypes.number.isRequired,
};

export default BattleCard;
