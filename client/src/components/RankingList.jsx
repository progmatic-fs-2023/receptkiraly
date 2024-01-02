import { useState } from 'react';
import RankingListQueryButtons from './RankingListQueryButtons';

function RankingList() {
  const [queryRanking, setQueryRankings] = useState('valami');

  function handleRankingQueryButton(string) {
    setQueryRankings(string);
  }

  return (
    <section className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
      <h1>Rankings</h1>
      <RankingListQueryButtons queryCallback={handleRankingQueryButton} />
      <p>{queryRanking}</p>
      
    </section>
  );
}

export default RankingList;
