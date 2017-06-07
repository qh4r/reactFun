import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from "./Main";
import Relay from "react-relay";

//pre relay
// ReactDOM.render(<Main maxLength={3}/>, document.querySelector(".app"));


class RootRoute extends Relay.Route {
  static routeName = 'Root';
  static queries = {
    store: (Component) => Relay.QL `
      query MyQuery {
        store {${Component.getFragment('store')}}
      }
    `
  }
}
ReactDOM.render(
  <Relay.RootContainer
    Component={Main}
    route={new RootRoute()}
  /> , document.querySelector(".app"));

// w relayu musi byc podany rodzaj operacji (np query/mutation) i nazwa
console.log(
  Relay.QL `
  query MyTest {
    store {
      links {
        url
      }
    }
  }
  `
); //wypisuje obiekt query