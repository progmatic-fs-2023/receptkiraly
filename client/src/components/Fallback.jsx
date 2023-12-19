import PropTypes from 'prop-types';

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="submit" onClick={resetErrorBoundary}>
        Try again
      </button>
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
