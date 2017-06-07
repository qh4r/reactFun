import React from 'react';
import PropTypes from 'prop-types'
import Relay from 'react-relay';

const LinkComponent = ({link: {url, title}}) =>
  <h3>
    <a href={url}>{title}</a>
  </h3>


export const Link = Relay.createContainer(
  LinkComponent, {
    fragments: {
      link: () => Relay.QL `
      fragment on Link {
        url,
        title     
      }
    `
    }
  }
)

