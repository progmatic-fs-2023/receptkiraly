import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import RecipeCard from '../components/RecipeCard';
import Carousel from '../components/Carousel';
import RecipeKingCard from '../components/RecipeKingCard';
import MainCategories from '../components/MainCategories';
import Categories from '../components/Categories';
import SwiperComponent from '../components/SwiperComponent';

function Home() {
  const [isConnect, setIsConnect] = useState(false);
  const [idsLatestRecipe, setIdsLatestRecipe] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
    fetch(`${API_URL}/recipes/latest/5`)
      .then((response) => {
        if (!response.ok) throw new Error('Latest recipe cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setIdsLatestRecipe(data.ids);
      });
  }, []);

  return (
    <div>
      <div>
        <img src="/images/banner-v2.png" alt="Banner" className="w-full relative z-10" />
      </div>
      <div className="container mx-auto my-2">
        <div className="hidden">
          Hello project!
          <ul>
            <li>
              {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
            </li>
          </ul>
        </div>
        <div className="container mx-auto my-2 flex flex-wrap flex-col">
          <div className="flex flex-wrap flex-col lg:flex-row justify-between items-start my-2">
            <div className="w-full lg:w-3/4">
              <h2 className="divider font-bold">
                <span>Find recipes by main category</span>
              </h2>
              <MainCategories />
            </div>
            <div className="w-full lg:w-1/4 flex flex-col justify-center items-start">
              <div className="w-full flex flex-col text-center justify-center items-start">
                <RecipeKingCard />
              </div>
              <div>
                <Carousel title="Latest recipes">
                  {idsLatestRecipe.map((id) => (
                    <RecipeCard
                      id={id}
                      imgUrl="https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_2480_1860.webp 2480w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_2074_1556.webp 2074w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1735_1301.webp 1735w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1452_1089.webp 1452w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1215_911.webp 1215w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1016_762.webp 1016w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_850_638.webp 850w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_711_533.webp 711w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_595_446.webp 595w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_498_374.webp 498w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_416_312.webp 416w"
                      minutes={55}
                      difficulty="Easy"
                      serves={5}
                      name="Air Fryer Fried Prawns"
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
        <h2 className="divider font-bold">
                <span>Most Popular Recipes</span>
              </h2>
        <div>
          <SwiperComponent title="">
            {idsLatestRecipe.map(() => (
              <RecipeCard
                id={7}
                imgUrl="https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_2480_1860.webp 2480w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_2074_1556.webp 2074w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1735_1301.webp 1735w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1452_1089.webp 1452w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1215_911.webp 1215w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1016_762.webp 1016w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_850_638.webp 850w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_711_533.webp 711w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_595_446.webp 595w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_498_374.webp 498w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_416_312.webp 416w"
                minutes={55}
                difficulty="Easy"
                serves={5}
                name="Air Fryer Fried Prawns"
              />
            ))}
          </SwiperComponent>
        </div>
      </div>
      </div>
      <div className="features-row my-8">
        <div className="container mx-auto flex justify-center">
          <h2 className="custom-features-title">
            Save your favourite recipes right to your Recipe King account:
            <input
              type="text"
              placeholder="Email"
              className="w-96 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-1"
            />
            <button type="button" className="border border-white border-dashed rounded py-2 px-3 hover:bg-orange-500">
              Subscribe!
            </button>
          </h2>
        </div>
      </div>
      <div className="container mx-auto my-2">
        <div className="w-full my-4">
          <h2 className="divider font-bold">
            <span>Top Categories</span>
          </h2>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Home;