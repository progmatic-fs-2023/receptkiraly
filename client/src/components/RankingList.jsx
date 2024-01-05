import { useState } from 'react';
import RankingListQueryButtons from './RankingListQueryButtons';
import RankingQueryResultList from './RankingQueryResultList';
import mockRankings from '../mockRankings';

function RankingList() {
  const [queriedRankingData, setQueriedRankingData] = useState([]);
  const [actualQueryButtonValue, setActualQueryButtonValue] = useState('');

  const mockData = mockRankings;

  function handleRankingQueryButton(queryButtonValue) {
    setActualQueryButtonValue(queryButtonValue);
    setQueriedRankingData(mockData[queryButtonValue]);

    // Ez itt lenne a fetch ha majd megírjuk a backendet hozzá. Majd az elnevezéseket frissíteni kell!
    /*
    try {
      const response = await fetch(`http://localhost:3000/${string}`);
      const data = await response.json();
      setActualQueryValue(string);
      setQueryRankings(data);
    } catch (error) {
      console.error('Error has accured:', error);
    }

    */
  }

  return (
    <section>
      <RankingListQueryButtons
        onFilterChange={(queryButtonValue) => handleRankingQueryButton(queryButtonValue)}
      />
      <RankingQueryResultList
        queriedRankingData={queriedRankingData}
        actualQueryValue={actualQueryButtonValue}
      />
    </section>
  );
}

export default RankingList;
