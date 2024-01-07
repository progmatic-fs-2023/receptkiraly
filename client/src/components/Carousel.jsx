/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ children, title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <div className="m-10">
      <h1 className=" xl:text-l lg:text-xl md:text-2xl sm:text-3xl text-2xl font-medium title-font mb-4 text-bluegary-900">
        {title}
      </h1>
      <div className="w-64 h-64 lg:w-80 lg:h-72 sm:h-72 rounded p-1 relative">
        <Slider {...settings}>{children.map((child) => child)}</Slider>
      </div>
    </div>
  );
}
export default Carousel;
Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
