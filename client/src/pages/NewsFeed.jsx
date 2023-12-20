import newsArray from '/data/NewsFeed.data.js';

function NewsFeed() {
  return newsArray.map((newsItem) => (
    <div className="w-auto md:w-4/5	 lg:w-3/5	xl:w-2/5 2xl:w-2/5	">
      <br />
      <article className="flex-row flex justify-between	">
        <div className="flex-col">
          <h6 className="text-1xl font-medium text-gray-500 dark:text-white">
            {newsItem.columnName}
          </h6>
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white">{newsItem.title}</h3>
          <p>{newsItem.headline}</p>
        </div>
        <div className="flex flex-col justify-end">
          <img className="" src={`images/${newsItem.authorImage}`} alt="" />
        </div>
      </article>
      <hr />
    </div>
  ));
}
export default NewsFeed;
