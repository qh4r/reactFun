var React = require('react'),
    ReactDOM = require('react-dom')
    Badge = require('./components/Badge'),
    ThumbnailsList = require('./components/ThumbnailsList');

ReactDOM.render(<Badge text="Wiadomości" quantity="103"/>, document.getElementById('f1'));
ReactDOM.render(<ThumbnailsList input={[
   {button: {name: "Wychodzące", number: 23}, label: 'Coś odemnie', url: 'http://image000.flaticon.com/icons/svg/134/134965.svg'},
    {button: {name: "Przychodzące", number:42}, label: 'Coś fajnego', url: 'http://image000.flaticon.com/icons/svg/134/134967.svg'},
    {button: {name: "Kopie robocze", number:3}, label: 'Coś do zapamiętania', url: 'http://image000.flaticon.com/icons/svg/134/134974.svg'},
    {button: {name: "Spam", number:12}, label: 'Coś zbędnego', url: 'http://image000.flaticon.com/icons/svg/134/134970.svg'}
]}/>, document.getElementById('f2'));