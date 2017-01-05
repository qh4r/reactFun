import Radium from 'radium';
import config from './config-styles';

// do dzialania animacji koniecnzy jest StyleRoot w wrapujacy komponenty (tutaj w app)
const pulse_animation = Radium.keyframes({
    '0%': {
        transform: 'scale3d(1, 1, 1)'
    },
    '15%': {
        transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '100%': {
        transform: 'scale3d(1, 1, 1)'
    },
}, 'nav'); // 2 arg to komponent

const btn = {
    flex: 1,
    height: config.imageHeight,
    padding: 20,
    fontSize: 50,
    background: 'transparent',
    color: '#eee',
    textShadow: '1px 1px 1px rgba(0, 0, 0, .5)',
    border: 'none',
    outline: 0,
    cursor: 'pointer',
    userSelect: 'none',
    // x to placeholder moze byc tam cokolwiek
    animation: `x 4s 2s infinite`,
    animationName: pulse_animation,

    // radium pozwala zagniezdzac w stylu sassa
    ':hover': {
        transition: 'all 0.8s',
        color: '#90A0A5'
    }
};

const prev = {
    ...btn,
    textAlign: 'left'
};

const next = {
    ...btn,
    textAlign: 'right'
};

const hidden = {
    visibility: 'hidden'
}

const prevHidden = {
    ...prev, ...hidden
}

const nextHidden = {
    ...next, ...hidden
}

export default {
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex'
    },
    prev,
    next,
    prevHidden,
    nextHidden
}
