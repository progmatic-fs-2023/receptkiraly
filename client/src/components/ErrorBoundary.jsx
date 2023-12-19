import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, code: error.code, description: error.description };
  }

  componentDidCatch(error, info) {
    console.log(`Error: ${error}, Component stack info: ${info.componentStack}`);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return fallback;
    }

    return children;
  }
}
ErrorBoundary.propTypes = {
  fallback: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
};
export default ErrorBoundary;
