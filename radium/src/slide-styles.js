import config from './config-styles';

const footerHeight = 120;

export default {
    root: {
        position: 'absolute',
        top: 0,
        transition: 'all .5s'
    },
    footer: {
        position: 'absolute',
        top: config.imageHeight - footerHeight,
        left: 0,
        width: '100%',
        padding: 15,
        height: footerHeight,
        background: 'rgba(0,0,0,.3)',
        color: '#eee',
        textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)',
        fontFamily: 'Helvetica Neue, Helvetica, Aria, sans-serif',
        fontSize: 14,
        boxSizing: 'border-box',
        lineHeight: '1.4em'
    },
    title: {
        margin: '0 0 10px 0'
    }
}