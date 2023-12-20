import Slider from 'react-slick';
import newsArray from '/data/NewsFeed.data.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NewsFeed() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-96 bg-orange-50	">
      <h2 className="text-xl font-semibold">Hírek</h2>
      <Slider {...settings}>
        {newsArray.map((newsItem) => {
          return (
            <div className="w-auto md:w-4/5	 lg:w-3/5	xl:w-2/5 2xl:w-2/5 border-2 rounded-lg border-gray-200 border-opacity-50">
              <br />
              <article className="flex-row flex justify-between	">
                <div className="flex-col">
                  <h6 className="text-1xl font-medium text-gray-500 dark:text-white">
                    {newsItem.columnName}
                  </h6>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    {newsItem.title}
                  </h3>
                  <p>{newsItem.headline}</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img className="" src={`images/${newsItem.authorImage}`} alt="" />
                </div>
              </article>
              <hr />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default NewsFeed;
