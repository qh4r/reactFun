import React from 'react';
import PropTypes from 'prop-types';

/** Simple greeting component */
const Hello = ({msg}) => {
  return (<div>
    Hello {msg}
  </div>)
};

Hello.propTypes = {
  // descriptions that get rendered must be made with multiline comments
  /** Message to be displayed */
  msg: PropTypes.string.isRequired,
};

Hello.defaultProps = {
  msg: 'Jake',
}

export default Hello;