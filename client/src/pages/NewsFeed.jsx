import newsArray from '../../public/data/NewsFeed.data';

function NewsFeed() {
  return newsArray.map((newsItem) => (
    <article>
      <h6>{newsItem.columnName}</h6>
      <h3>{newsItem.title}</h3>
      <p>{newsItem.headline}</p>
      <img src={`../../public/data/images/${newsItem.authorImage}`} alt="" />
      <br />
      <hr />
    </article>
  ));
}
export default NewsFeed;
