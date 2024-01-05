import { useState } from 'react';
import RankingListQueryButtons from './RankingListQueryButtons';
import RankingQueryResultList from './RankingQueryResultList';
import mockRankings from '../mockRankings';

function RankingList() {
  const [queryRanking, setQueryRankings] = useState([]);
  const [actualQueryValue, setActualQueryValue] = useState('');

  const mockData = mockRankings;

  function handleRankingQueryButton(string) {
    setActualQueryValue(string);
    setQueryRankings(mockData[string]);

    // Ez itt lenne a fetch ha majd megírjuk a backendet hozzá.
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
      <RankingListQueryButtons queryCallback={(string) => handleRankingQueryButton(string)} />
      <RankingQueryResultList queryRanking={queryRanking} actualQueryValue={actualQueryValue} />
    </section>
  );
}

export default RankingList;
