import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({url, title}) =>
  <h3>
    <a href={url}>{title}</a>
  </h3>


Link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};