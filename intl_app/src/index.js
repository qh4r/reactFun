import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addLocaleData, IntlProvider } from 'react-intl';
import messages from './messages';
import './index.css';

import pl from 'react-intl/locale-data/pl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { flattenMessages } from './utils';


// initialization of locale data
addLocaleData([...en, ...pl, ...es]);

let locale = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.language // IE
  || 'en-US';


ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('root'));
