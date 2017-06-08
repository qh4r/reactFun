import React, {Component} from 'react';
import {API} from "./api";
import LinksStore from "./stores/LinksStore";
import PropTypes from 'prop-types';
import {Link} from './components/Link';
import Relay from 'react-relay';
import {CreateLinkMutation} from './mutations/createLinkMutation'
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
    console.log(args.target.value, this.props.relay.variables.size)
    this.props.relay.setVariables({
      size: args.target.value
    })
  }

  render() {
    console.log(this.props.store.linkConnection.edges);
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
        <option value={8}>8</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
      <div>
        dodaj link:
        <form onSubmit={(e) => this.submitNew(e)}>
          <div>
          <label htmlFor="title">Tytuł</label>
          <input type="text" name="title" id="title" ref={ctrl => this.titleInput = ctrl}/>
          </div>
          <div>
          <label htmlFor="url">Url</label>
          <input type="text" name="url" id="url" ref={ctrl => this.urlInput = ctrl}/>
          </div>
          <div>
            <input type="submit" value="Dodaj"/>
          </div>
        </form>
      </div>
    </div>
  }

  submitNew(e) {
    e.preventDefault();
    Relay.Store.commitUpdate(
      new CreateLinkMutation({
        title: this.titleInput.value,
        url: this.urlInput.value,
        store: this.props.store
      })
    )
    this.titleInput.value = "";
    this.urlInput.value = "";
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
      id,
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