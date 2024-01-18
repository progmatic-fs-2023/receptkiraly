import { Link } from 'react-router-dom';
import King from '../assets/king.png';
import Crown from '../assets/crown.png';

function RecipeKingCard() {
  return (
    <div className=" flex-col justify-center w-80 h-80">
      <Link to="/about">
        <h1 className="text-center mb-5 font-bold">Recipe King</h1>
      </Link>
      <Link to="/about">
        <img src={King} alt="" className="w-44 h-44 rounded-lg relative top-5 left-16 " />
        <img src={Crown} alt="" className="w-20 relative -top-48 left-8" />
      </Link>
      <div className="flex justify-around">
        <p className="invisible">Battles winned: 35⚔</p>
        <p className="invisible">Likes: 50❤ </p>
      </div>
    </div>
  );
}
export default RecipeKingCard;
