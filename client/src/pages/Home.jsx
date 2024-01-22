import { useEffect, useState } from 'react';
import { Add, Login } from '@mui/icons-material';
import { API_URL } from '../constants';

import SwiperComponent from '../components/SwiperComponent';
import RecipeCard from '../components/RecipeCard';
import Carousel from '../components/Carousel';
import DetailedRecipe from '../components/DetailedRecipe';
import RecipeKingCard from '../components/RecipeKingCard';
import Modal from '../components/Modal';

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

  // Recipe King Modals
  const editMode = true;
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Here
  const [isCreateRecipe, setISCreateRecipe] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      setISCreateRecipe(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <div>
      <div>
        <img src="/images/banner-v2.png" alt="Banner" className="w-full relative z-20" />
      </div>
      <div className="container mx-auto my-2">
        <div>
          Hello project!
          <ul>
            <li>
              {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
            </li>
          </ul>
        </div>

        <div className="flex">
          <div className=" flex text-center justify-center items-center basis-2/6 ">
            <div>
              <RecipeKingCard />
            </div>
          </div>

          <div className=" flex basis-2/6 border-x">
            <div className="m-auto">
              <div className="text-center ">
                <h2 className="text-4xl text-orange-400 tracking-widest font-medium title-font mb-5">
                  Post Recipes
                </h2>

                {/* Modal button */}
                <div>
                  <div className="flex w-full max-w-md bg-gray-100 p-4 rounded-lg shadow mb-4">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="mx-auto scale-150 hover:text-orange-400">
                          <button
                            aria-label="Click this to add a new recipe"
                            type="button"
                            onClick={() => handleButtonClick()}
                          >
                            <Add />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Combined modal */}
                  <div>
                    {(isCreateRecipe || showLoginModal) && (
                      <Modal
                        title={isCreateRecipe ? 'Create New Recipes' : 'Login'}
                        close={() => {
                          setISCreateRecipe(false);
                          setShowLoginModal(false);
                        }}
                      >
                        {isCreateRecipe ? (
                          <div>
                            <DetailedRecipe editMode={editMode} />
                          </div>
                        ) : (
                          <div>
                            <Login />
                            <button type="button" onClick={handleLogin}>
                              Login
                            </button>
                          </div>
                        )}
                      </Modal>
                    )}
                  </div>
                </div>

                <p className="leading-relaxed text-base">and be the &quot;Recipe King&quot;</p>
              </div>
            </div>
          </div>

          <div className=" basis-2/6">
            <div className="flex justify-center ">
              <div className="">
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
        <div className=" basis-2/6">
          <div className="flex justify-center ">
            <div className="">
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

      <div>
        <div>
          <SwiperComponent title="Most Popular">
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
      <div>
        <div>
          <SwiperComponent title="Most Popular">
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
  );
}

export default Home;
