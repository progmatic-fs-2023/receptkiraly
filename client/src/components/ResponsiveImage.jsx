import PropTypes from 'prop-types';

function ResponsiveImage({ imgUrl }) {
  return (
    <img
      sizes="(min-width: 1024px) 298px, (min-width: 1304px) 392px, 80vw"
      srcSet={imgUrl}
      loading="lazy"
      width={1240}
      height={930}
      className="block h-auto rounded w-full"
      alt=""
    />
  );
}
ResponsiveImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
export default ResponsiveImage;
