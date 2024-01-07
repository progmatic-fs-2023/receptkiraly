import { NavLink } from 'react-router-dom';
import NavSubHeadItem from './NavSubHeadItem';
import NavSubListItem from './NavSubListItem';
import PopularThisWeek from './PopularThisWeek';

function NavigationBar() {
  return (
    <nav>
      <div className="border-t border-t-light hidden lg:flex justify-between py-6 valami">
        <ul className="flex -mx-[20px] z-10">
          <li className="mega-menu__item group px-[20px]">
            <NavLink
              to="/recipesfeed"
              className="uppercase font-medium mega-menu__item hover:text-primary"
            >
              <span>Meals</span>
            </NavLink>
            <div className="absolute bg-zinc-50 z-50 border-t-[24px] border-t-white hidden group-hover:block left-0 overflow-hidden w-full mega-menu__dd">
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem
                          text="Appetizers"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Dips and Dippers"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Mini Bites"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Salads"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Pastry Slices"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Breakfast"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Egg Dishes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Cereals"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Fruit Salads"
                            link="http://localhost:5173/searchrecipes?query="
                          />

                          <NavSubListItem
                            text="Dairy-based"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Lunch"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Sandwiches"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Salads"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Soups"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Burgers"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Stews"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Pasta and Noodles"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Meaty"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Dinner"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Steak"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Rice dishes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Seafood Specials"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Grilled and BBQ"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="National cuisines"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Italian"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="French"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Mexican"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Chinese"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Indian"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Indian"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Greek"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Seasonal"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Spring"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Summer"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Fall"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Winter"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Indian"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <a
                        className="block border border-primary font-semibold hover:bg-primary hover:text-white py-3 px-8 rounded sm:inline-block text-primary text-sm text-center uppercase"
                        target="_self"
                        title=""
                        href="https://foodnetwork.co.uk/recipes"
                      >
                        <span>Explore All Recipes</span>
                      </a>
                    </div>
                  </div>
                  <PopularThisWeek />
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu__item group px-[20px]">
            <NavLink
              to="/recipesfeed"
              className="uppercase font-medium mega-menu__item hover:text-primary"
            >
              <span>Desserts</span>
            </NavLink>
            <div className="absolute bg-zinc-50 z-50 border-t-[24px] border-t-white hidden group-hover:block left-0 overflow-hidden w-full mega-menu__dd">
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem
                          text="Cakes"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Cakes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Sponge cakes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Muffins"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Cupcakes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Frozen Desserts"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Ice cream"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Sorbet"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Gelato"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Ice cream cakes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Chocolate and Candies"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Truffles"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Bonbons"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Bars and slabs"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Creams and mousses"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Fruit Desserts"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Fruit salads"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Puddings"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Sorbet"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Traditional "
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Éclairs"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Baklava"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Cannoli"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Mochi"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <a
                        className="block border border-primary font-semibold hover:bg-primary hover:text-white py-3 px-8 rounded sm:inline-block text-primary text-sm text-center uppercase"
                        target="_self"
                        title=""
                        href="https://foodnetwork.co.uk/recipes"
                      >
                        <span>Explore All Recipes</span>
                      </a>
                    </div>
                  </div>
                  <PopularThisWeek />
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu__item group px-[20px]">
            <NavLink
              to="/recipesfeed"
              className="uppercase font-medium mega-menu__item hover:text-primary"
            >
              <span>Beverages</span>
            </NavLink>
            <div className="absolute bg-zinc-50 z-50 border-t-[24px] border-t-white hidden group-hover:block left-0 overflow-hidden w-full mega-menu__dd">
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem
                          text="Hot Drinks"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Coffee"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Tea"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Hot Chocolate"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Chai tea"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Cold Drinks"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Iced coffee"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Iced tea"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Cold brew"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Lemonade"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Soft drinks"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Cola"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Ginger ale"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Root beer"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Juices"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Orange juice"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Apple juice"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Grape juice"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Cranberry juice"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Smoothies"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Berry smoothie"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Green smoothie"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Protein smoothie"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <a
                        className="block border border-primary font-semibold hover:bg-primary hover:text-white py-3 px-8 rounded sm:inline-block text-primary text-sm text-center uppercase"
                        target="_self"
                        title=""
                        href="https://foodnetwork.co.uk/recipes"
                      >
                        <span>Explore All Recipes</span>
                      </a>
                    </div>
                  </div>
                  <PopularThisWeek />
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu__item group px-[20px]">
            <NavLink
              to="/recipesfeed"
              className="uppercase font-medium mega-menu__item hover:text-primary"
            >
              <span>Chefs</span>
            </NavLink>
            <div className="absolute bg-zinc-50 z-50 border-t-[24px] border-t-white hidden group-hover:block left-0 overflow-hidden w-full mega-menu__dd">
              <div className="container mx-auto">
                <div className="flex">
                  <div className="bg-zinc-50 pr-16 py-12 relative">
                    <ul className="flex space-x-20">
                      <li>
                        <NavSubHeadItem
                          text="Special Occasions"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Christmas Recipes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 2"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 3"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Special Occasions"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Christmas Recipes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 2"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 3"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Special Occasions"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Christmas Recipes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 2"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 3"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                      <li>
                        <NavSubHeadItem
                          text="Special Occasions"
                          link="http://localhost:5173/searchrecipes?query="
                        />
                        <ul className="mt-8 space-y-2">
                          <NavSubListItem
                            text="Christmas Recipes"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 2"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                          <NavSubListItem
                            text="Valami 3"
                            link="http://localhost:5173/searchrecipes?query="
                          />
                        </ul>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <a
                        className="block border border-primary font-semibold hover:bg-primary hover:text-white py-3 px-8 rounded sm:inline-block text-primary text-sm text-center uppercase"
                        target="_self"
                        title=""
                        href="https://foodnetwork.co.uk/recipes"
                      >
                        <span>Explore All Recipes</span>
                      </a>
                    </div>
                  </div>
                  <PopularThisWeek />
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
