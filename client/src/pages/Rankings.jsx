import RankingList from '../components/RankingList';

function Rankings() {
  return (
    <div className="mb-16 flex flex-wrap">
      <RankingList />
      <aside className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h1>Your rank</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero reiciendis, porro
          architecto aperiam accusantium. Ducimus, natus quaerat accusantium asperiores corporis,
          dicta autem fugit esse impedit eos facilis? Commodi, officia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero reiciendis, porro
          architecto aperiam accusantium. Ducimus, natus quaerat accusantium asperiores corporis,
          dicta autem fugit esse impedit eos facilis? Commodi, officia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero reiciendis, porro
          architecto aperiam accusantium. Ducimus, natus quaerat accusantium asperiores corporis,
          dicta autem fugit esse impedit eos facilis? Commodi, officia.
        </p>
      </aside>
    </div>
  );
}

export default Rankings;
