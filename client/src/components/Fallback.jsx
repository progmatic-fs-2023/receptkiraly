import PropTypes from 'prop-types';
import Button from './Button';

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button type="submit" text="Try again" onClick={resetErrorBoundary} />
    </div>
  );
}

Fallback.defaultProps = {
  resetErrorBoundary: () => null,
};
Fallback.propTypes = {
  error: PropTypes.shape.isRequired,
  resetErrorBoundary: PropTypes.func,
};
export default Fallback;
