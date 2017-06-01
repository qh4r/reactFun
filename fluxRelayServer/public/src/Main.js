import React, {Component} from 'react';
import {API} from "./api";
import LinksStore from "./stores/LinksStore";
import PropTypes from 'prop-types';

export class Main extends Component {
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

  getLinks() {
    return {
      links: LinksStore.getAllLinks() || []
    }
  }

  constructor(props) {
    super(props);

    this.state = this.getLinks();
    this.linksListener = LinksStore.addListener("change", () => this.setState(this.getLinks()))
  }

  componentWillMount() {
    API.fetchLinks();
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.linksListener.remove();
  }

  render() {
    return <div>{this.state.links.length ?
      <div><h2>Linki:</h2>
        {this.state.links.slice(0, this.props.maxLength)
          .map(({_id, title, url}) =>
            <h3 key={_id}>
              <a href={url}>{title}</a>
            </h3>
          )}
      </div>
      : <h2>Ni ma</h2>
    }</div>
  }
}