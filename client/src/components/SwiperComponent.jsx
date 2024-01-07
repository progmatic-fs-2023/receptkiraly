import PropTypes from 'prop-types';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import custom css
import './SwiperComponent.css';

function SwiperComponent({ children, title }) {
  return (
    <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blueGray-800">
        {title}
      </h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {children.map((child) => (
          <SwiperSlide>
            <div className="pb-6">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
SwiperComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default SwiperComponent;
