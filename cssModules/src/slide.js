import React from 'react'
import Styleable from 'react-styleable';
import styles from './styles/slide.css';

const { object, string } = React.PropTypes

function Slide(props) {
  return (
    <article className={props.css.root} style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer className={props.css.footer}>
        <h2 className={props.css.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: string.isRequired,
  style: object,
  title: string
}

export default Styleable(styles)(Slide);
