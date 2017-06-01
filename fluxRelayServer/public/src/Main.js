import React, {Component} from 'react';
import {API} from "./api";
import LinksStore from "./stores/LinksStore";

export class Main extends Component {
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