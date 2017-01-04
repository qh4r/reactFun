import React from 'react'
import frameStyles from './frame-styles';

export default function Frame({ children }) {
  return <div style={frameStyles.root}>{children}</div>
}
