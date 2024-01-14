import React from 'react';
import PropTypes from 'prop-types';

function InfoCard({ children, title }) {
  return (
    <div className="flex flex-col items-center border p-4 rounded-md bg-gray-100 shadow m-2 h-full justify-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}

export default InfoCard;

InfoCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
