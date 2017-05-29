import React from 'react'
import Styleable from 'react-styleable';

import styles from './styles/frame.css';


function Frame(props) {
  return <div className={props.css.root}>{props.children}</div>
}

export default Styleable(styles)(Frame);
