import newsArray from '../assets/data/NewsFeed.data';

function NewsFeed() {
  return newsArray.map((newsItem) => <div>{newsItem.title}</div>);
}

export default NewsFeed;
