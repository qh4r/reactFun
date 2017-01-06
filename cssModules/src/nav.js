import React from 'react'
import Styleable from'react-styleable';
import styles from './styles/nav.css';

const {func, bool} = React.PropTypes;

function getAnyPrevious(props) {
    return props.hasPrevious ? props.css["btn-prev"] : props.css["btn-prev-hidden"];
}

function getAnyNext(props) {
    return props.hasNext ? props.css["btn-next"] : props.css["btn-next-hidden"];
}

function Nav(props) {
    return (
        <div className={props.css.root}>
            <button className={getAnyPrevious(props)} onClick={props.onPrevious}>&#10094;</button>
            <button className={getAnyNext(props)} onClick={props.onNext}>&#10095;</button>
        </div>
    )
}

Nav.propTypes = {
    onPrevious: func.isRequired,
    onNext: func.isRequired,
    hasPrevious: bool,
    hasNext: bool
};

export default Styleable(styles)(Nav);
