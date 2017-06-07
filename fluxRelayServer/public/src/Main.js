import React, {Component} from 'react';
import {API} from "./api";
import LinksStore from "./stores/LinksStore";
import PropTypes from 'prop-types';
import {Link} from './components/Link';
import Relay from 'react-relay';

class MainClass extends Component {
  // getery sa dobre gdy nie jest wspierane stage-- es2017 - ktore umozlia przypisywanie do propert ( proptypes = {})
  // static get defaultProps() {
  //   return {
  //     maxLength: 4
  //   }
  // }

  // ze stage-0 mozna zwiezlej uzywac takiej wersji:
  // static propTypes = {
  //   maxLength: PropTypes.number.isRequired
  // }

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

  visibleLinksChanged(args) {
    this.props.relay.setVariables({
      size: args.target.value
    })
  }

  render() {
    return <div>{this.props.store.linkConnection.edges.length ?
      <div><h2>Linki:</h2>
        {this.props.store.linkConnection.edges
          .map((link) =>
            <Link key={link.node.id} link={link.node}/> // przekazujemy link
          )}
      </div>
      : <h2>Ni ma</h2>
    }
    <div>
      linkow na stronie:
      <select defaultValue={this.props.relay.variables.size}  onChange={(args, a) => this.visibleLinksChanged(args)}>
        <option value={2}>2</option>
        <option value={4}>4</option>
        <option value={6}>6</option>
      </select>
    </div>
    </div>
  }
}

// tutaj mamy tylko id  reszte pobiera tak naprawde komponent dziecko (uzywamy nizej funkcji na komponencie)
export const Main = Relay.createContainer(MainClass, {
  // poczatkowe wartosci $zmiennych wykorzystanych w QLu
  initialVariables: {
    size: 4
  },
  fragments: {
    store: () => Relay.QL `
      fragment on Store {
        linkConnection(first: $size) {
          edges {
            node {
              id,
              ${Link.getFragment('link')}
            }
          }
        }
      }
    `
  }
})

//old (simple) way
// fragment on Store {
//   links {
//     id,
//     ${Link.getFragment('link')}
//   }
// }