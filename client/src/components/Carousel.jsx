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
      <h1 className="title-font text-xl font-medium text-blueGray-800 mb-3 ">{title}</h1>
      <div className="w-64 h-64 sm:h-72 rounded p-1 relative">
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
