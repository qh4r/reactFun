import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({msg}) => {
  return (<div>
    Hello {msg}
  </div>)
};

Hello.propTypes = {
  msg: PropTypes.string,
};

export default Hello;