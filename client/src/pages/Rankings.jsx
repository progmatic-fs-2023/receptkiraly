import RankingList from '../components/RankingList';

function Rankings() {
  return (
    <div className="mb-16 flex flex-wrap">
      <RankingList className="w-full lg:w-4/5" />
      <aside className="w-full lg:w-1/5 lg:pl-6">
        <h1>Your rank</h1>
        <p>Mindenféle badge és jóság</p>
        <p>User adatok és mindenféle jóság és királyság</p>
        <p>Legyen itt is valami, miért ne egyéb cuccok.</p>
      </aside>
    </div>
  );
}

export default Rankings;
