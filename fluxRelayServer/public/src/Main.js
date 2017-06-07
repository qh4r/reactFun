import React, {Component} from 'react';
import {API} from "./api";
import LinksStore from "./stores/LinksStore";
import PropTypes from 'prop-types';
import {Link} from './components/Link';
import Relay from 'react-relay';

class MainClass extends Component {
  // getery sa dobre gdy nie jest wspierane stage-- es2017 - ktore umozlia przypisywanie do propert ( proptypes = {})
  static get defaultProps() {
    return {
      maxLength: 4
    }
  }

  // ze stage-0 mozna zwiezlej uzywac takiej wersji:
  static propTypes = {
    maxLength: PropTypes.number.isRequired
  }

  // RELAY NIE UZYWA FLUXA

  // getLinks() {
  //   return {
  //     links: LinksStore.getAllLinks() || []
  //   }
  // }
  //
  // constructor(props) {
  //   super(props);
  //
  //   this.state = this.getLinks();
  //   this.linksListener = LinksStore.addListener("change", () => this.setState(this.getLinks()))
  // }
  //
  // componentWillMount() {
  //   API.fetchLinks();
  // }
  //
  // componentDidMount() {
  //
  // }
  //
  // componentWillUnmount() {
  //   this.linksListener.remove();
  // }

  render() {
    return <div>{this.props.store.links.length ?
      <div><h2>Linki:</h2>
        {this.props.store.links.slice(0, this.props.maxLength)
          .map((link) =>
            <Link key={link._id} link={link}/> // przekazujemy link
          )}
      </div>
      : <h2>Ni ma</h2>
    }</div>
  }
}

// tutaj mamy tylko id  reszte pobiera tak naprawde komponent dziecko (uzywamy nizej funkcji na komponencie)
export const Main = Relay.createContainer(MainClass, {
  fragments: {
    store: () => Relay.QL `
      fragment on Store {
          links {
            _id,
            ${Link.getFragment('link')}
        }
      }
    `
  }
})