import PropTypes from 'prop-types';

function ResponsiveImage({ imgUrl }) {
  return (
    <div className="square-image-wrapper">
      <img srcSet={imgUrl} loading="lazy" className="square-image" alt="" />
    </div>
  );
}
ResponsiveImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
export default ResponsiveImage;
