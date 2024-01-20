import React from 'react';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import info from '../assets/info.svg';

function Tooltips({ title, children }) {
  const style = {
    background: '#fff !important',
    color: 'black',
  };

  return (
    <Tooltip
      title={title}
      position="top"
      arrow
      theme="light"
      animation="fade"
      trigger="mouseenter"
      size="medium"
      placement="bottom"
      followCursor
      style={style}
      html={
        <div className="flex flex-row flex-nowrap">
          <img src={info} alt="Alert" />
          &nbsp;{title}
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}

Tooltips.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltips;
