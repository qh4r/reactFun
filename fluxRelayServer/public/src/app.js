import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from "./Main";
import Relay from "react-relay";

ReactDOM.render(<Main maxLength={3}/>, document.querySelector(".app"));

// w relayu musi byc podany rodzaj operacji (np query/mutation) i nazwa
console.log(
  Relay.QL `
  query MyTest {
    links {
      url
    }
  }
  `
); //wypisuje obiekt query