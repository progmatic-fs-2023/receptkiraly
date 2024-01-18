import { Link } from 'react-router-dom';
import AboutIMG from '../assets/Aboutpageimg.png';

function About() {
  return (
    <div>
      <Link to="/" className="hover:underline">
        <div className="ml-32  ">Home</div>
      </Link>

      <h1 className="ml-32 mt-6 mb-6">About</h1>
      <div className="grid  justify-items-center mx-32">
        <img src={AboutIMG} alt="aboutImg" className="" />
      </div>
      <div className="flex mt-6">
        <h1 className="basis-1/2 ml-32 mt-6">Now we look as good as we taste!</h1>
        <p className="basis-1/2 mr-32 mb-16 mt-6">
          Welcome to your new-look Recipe King website; we’ve still got the same delicious food
          content that you know and love… we’ve just upped our presentation skills! Recipe King is
          the ultimate food destination. We’re the go-to foodie friend for all your culinary needs.
          Take a look through thousands of recipes on our website, where you’ll also find all the
          information you need about your favourite chefs and programmes. Follow us on Facebook,
          Instagram, YouTube and Twitter.
        </p>
      </div>
    </div>
  );
}
export default About;
