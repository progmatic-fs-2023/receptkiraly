import { useState, useEffect } from 'react';
import NavSubHeadItem from './NavSubHeadItem';
import NavSubListItem from './NavSubListItem';
import PopularThisWeekItem from './PopularThisWeekItem';
import NavButton from './NavButton';
import { meals, desserts, beverages, chefsProf, chefsAmateur } from './NavArrays';

// Pictures of dishes
import dummyImg1 from './img/dishes/dummyImg1.webp';
import dummyImg2 from './img/dishes/dummyImg2.webp';
import dummyImg3 from './img/dishes/dummyImg3.webp';

// Pictures of chefs

import chef1 from './img/chefs/chef1.webp';
import chef2 from './img/chefs/chef2.webp';
import chef3 from './img/chefs/chef3.webp';
import chef4 from './img/chefs/chef4.webp';
import chef5 from './img/chefs/chef5.webp';
import chef6 from './img/chefs/chef6.webp';
import chef7 from './img/chefs/chef7.webp';

function NavigationBar() {
  const link = 'http://localhost:5173/search';

  const [activeMenu, setActiveMenu] = useState(null);

  function handleMenuToggle(menu) {
    setActiveMenu(activeMenu === menu ? null : menu);
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('.mega-menu__item')) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <nav className="z-50">
      <div className="border-t border-t-light hidden lg:flex justify-between py-6 w-full">
        <ul className="flex -mx-[20px] z-10 ">
          <li className="mega-menu__item group px-[20px]">
            <button
              className="uppercase font-medium mega-menu__item hover:text-orange-400 text-2xl"
              id="mealsLink"
              onClick={() => handleMenuToggle('recipes')}
              type="button"
            >
              Recipes
            </button>

            <div
              className={`absolute bg-zinc-50 z-50 border-t-[24px] border-t-white ${
                activeMenu === 'recipes' ? '' : 'hidden'
              } left-0 overflow-hidden w-full mega-menu__dd`}
            >
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem text="Meals" link="http://localhost:5173/search?q=" />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            itemsArray={meals}
                            link="http://localhost:5173/search?q="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem text="Desserts" link="http://localhost:5173/search?q=" />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            itemsArray={desserts}
                            link="http://localhost:5173/search?q="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem text="Beverages" link="http://localhost:5173/search?q=" />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            itemsArray={beverages}
                            link="http://localhost:5173/search?q="
                          />
                        </ul>
                      </li>
                    </ul>
                    <NavButton text="Explore All Recipes" />
                  </div>
                  <div className="bg-[#eee] pl-12 py-12 relative after:block after:bg-[#eee] after:absolute after:left-full after:h-full after:top-0 after:w-screen">
                    <p className="block text-xs uppercase text-body/60">Popular This Week</p>
                    <div className="flex mt-8 space-x-6">
                      <PopularThisWeekItem img={dummyImg1} link={link} text="ChuckleChomp Deluxe" />
                      <PopularThisWeekItem
                        img={dummyImg2}
                        link={link}
                        text="MeatyMirth Masterpiece"
                      />
                      <PopularThisWeekItem img={dummyImg3} link={link} text="BrothBelly Giggler" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu__item group px-[20px]">
            <button
              className="uppercase font-medium mega-menu__item hover:text-orange-400 text-2xl"
              id="mealsLink"
              onClick={() => handleMenuToggle('chefs')}
              type="button"
            >
              Chefs
            </button>
            <div
              className={`absolute bg-zinc-50 z-50 border-t-[24px] border-t-white ${
                activeMenu === 'chefs' ? '' : 'hidden'
              } left-0 overflow-hidden w-full mega-menu__dd`}
            >
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem
                          text="Professional Chefs"
                          link="http://localhost:5173/search?q="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            itemsArray={chefsProf}
                            link="http://localhost:5173/search?q="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Amateur Chefs"
                          link="http://localhost:5173/search?q="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            itemsArray={chefsAmateur}
                            link="http://localhost:5173/search?q="
                          />
                        </ul>
                      </li>
                    </ul>

                    <NavButton text="Explore Our Shefs" />
                  </div>
                  <div className="bg-[#eee] pl-12 py-12 relative after:block after:bg-[#eee] after:absolute after:left-full after:h-full after:top-0 after:w-screen">
                    <p className="block text-xs uppercase text-body/60">Popular This Week</p>
                    <div className="flex mt-8 space-x-6">
                      <PopularThisWeekItem img={chef1} link={link} text="Whisker Wendy" />
                      <PopularThisWeekItem img={chef2} link={link} text="Giggles Gary" />
                      <PopularThisWeekItem img={chef3} link={link} text="Laughing Larry" />
                      <PopularThisWeekItem img={chef4} link={link} text="Snicker Steve" />
                      <PopularThisWeekItem img={chef5} link={link} text="Jocular James" />
                      <PopularThisWeekItem img={chef6} link={link} text="Chuckle Charlie" />
                      <PopularThisWeekItem img={chef7} link={link} text="Humorous Hannah" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
