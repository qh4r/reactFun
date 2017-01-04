import config from './config-styles';

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
    userSelect: 'none'
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
