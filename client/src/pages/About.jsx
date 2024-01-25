import { Link } from 'react-router-dom';
import AboutIMG from '../assets/aboutimg.png';

function About() {
  return (
    <div className="">
      <Link to="/" className="hover:underline mb-6 relative z-10">
        <div className="ml-32">Home</div>
      </Link>

      <h1 className="ml-32 mt-6 mb-6 ">About Us</h1>
      <h1 className="mt-6 ml-32 mb-9">Now we look as good as we taste!</h1>
      <div className="flex">
        <div className="grid justify-items-start mx-32 basis-1/2">
          <img src={AboutIMG} alt="aboutImg" className="" />
        </div>
        <div className="flex mt-6 basis-1/2">
          <p className=" mr-32 mb-16 mt-6">
            Welcome to your new-look Recipe King website; we’ve still got the same delicious food
            content that you know and love… we’ve just upped our presentation skills! Recipe King is
            the ultimate food destination. We’re the go-to foodie friend for all your culinary
            needs. Take a look through thousands of recipes on our website, where you’ll also find
            all the information you need about your favourite chefs and programmes. Follow us on
            Facebook, Instagram, YouTube and Twitter. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Asperiores facilis quam minima, sed iusto illum cumque tempora
            praesentium ipsum natus doloribus quaerat iste sapiente tenetur tempore neque iure at id
            culpa ducimus aspernatur voluptatem libero quasi? Sit enim vel sunt aliquam tempora,
            nobis error magni corporis dolor reprehenderit ratione beatae voluptatum eius dicta,
            incidunt atque mollitia explicabo architecto possimus quod! Laboriosam aperiam officia
            dolor dolores ratione, quidem magni dolorem cupiditate? Ea quae, vel culpa, dolorem iste
            reprehenderit odit maiores voluptatum beatae deleniti architecto voluptate? Vero
            deleniti alias debitis iure deserunt necessitatibus numquam dolores provident recusandae
            pariatur illo ex praesentium explicabo doloribus eos id ratione hic libero accusamus,
            voluptatem illum beatae laborum repellat? Assumenda nesciunt at quibusdam in
            voluptatibus perspiciatis inventore cumque aspernatur.
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font ">
        <div className="container  py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md mx-6">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <p className="text-indigo-500 leading-relaxed">receptkiraly@info.com</p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+ 01 234 567 88</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <div className="leading-7 text-sm text-gray-600">Name</div>
              <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <div className="leading-7 text-sm text-gray-600">Email</div>
              <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <div className="leading-7 text-sm text-gray-600">Message</div>
              <textarea className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
            </div>

            <button
              type="button"
              className="custom-button-color border custom-button-border custom-button-shadow text-white px-4 py-1 rounded focus:outline-none mx-1"
            >
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
