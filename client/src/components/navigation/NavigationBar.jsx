import { useState, useEffect } from 'react';
import NavSubHeadItem from './NavSubHeadItem';
import NavSubListItem from './NavSubListItem';
import PopularThisWeekItem from './PopularThisWeekItem';
import NavButton from './NavButton';
import { meals, desserts, beverages, chefs } from './NavArrays';

// Pictures of dishes
import dummyImg1 from './img/dishes/dummyImg1.webp';
import dummyImg2 from './img/dishes/dummyImg2.webp';
import dummyImg3 from './img/dishes/dummyImg3.webp';

function NavigationBar() {
  const { port } = window.location;
  const link = `http://localhost:${port}/search`;

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
    <nav className="z-50 ">
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
              } left-0 overflow-hidden w-screen mega-menu__dd`}
            >
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem label="Meals" />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem itemsArray={meals} link={link} />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem label="Desserts" />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem itemsArray={desserts} link={link} />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem label="Beverages" />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem itemsArray={beverages} link={link} />
                        </ul>
                      </li>
                    </ul>
                    <NavButton label="Explore All Recipes" link={link} />
                  </div>
                  <div className="bg-[#eee] pl-12 py-12 relative after:block after:bg-[#eee] after:absolute after:left-full after:h-full after:top-0 after:w-screen">
                    <p className="block text-xs uppercase text-body/60">Popular This Week</p>
                    <div className="flex mt-8 space-x-6">
                      <PopularThisWeekItem
                        img={dummyImg1}
                        link="http://localhost:5173/recipe/1"
                        label="ChuckleChomp Deluxe"
                      />
                      <PopularThisWeekItem
                        img={dummyImg2}
                        link="http://localhost:5173/recipe/2"
                        label="MeatyMirth Masterpiece"
                      />
                      <PopularThisWeekItem
                        img={dummyImg3}
                        link="http://localhost:5173/recipe/3"
                        label="BrothBelly Giggler"
                      />
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
              } left-0 overflow-hidden w-screen mega-menu__dd`}
            >
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-[#eee] pl-12 py-12 relative after:block after:bg-[#eee] after:absolute after:left-full after:h-full after:top-0 after:w-screen">
                    <p className="block text-xs uppercase text-body/60">Our Chefs</p>
                    <div className="flex mt-8 space-x-6">
                      {chefs.map((chef) => (
                        <PopularThisWeekItem img={chef.img} link={link} label={chef.label} username={chef.username}/>
                      ))}
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
