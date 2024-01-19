import King from '../assets/king.png';
import Crown from '../assets/crown.png';

function RecipeKingCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center mb-5 font-bold">Profile Name</h1>
      <div>
      <img src={King} alt="" className="w-44 h-44 rounded-lg relative top-5 left-0 " />
      <img src={Crown} alt="" className="w-20 relative -top-48 -left-8" />
      <button type="button" className="underline text-blue-500 hover:opacity-80 focus:outline-none relative -top-10">Check this chef&apos;s recipes!</button>
      </div>
      <div className="flex justify-around">
        <p className="invisible">Battles winned: 35⚔</p>
        <p className="invisible">Likes: 50❤ </p>
      </div>
    </div>
  );
}
export default RecipeKingCard;
