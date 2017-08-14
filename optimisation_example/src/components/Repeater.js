import React, {Component, PureComponent} from 'react';
import Perf from 'react-addons-perf';

// PERF ALLOWS TO OPTIMISE REACT
if(typeof window !== 'undefined') {
  window.Perf = Perf;
}

// http://localhost:3000/?react_perf
// FOR PERFORMANCE INSIGHT
// add ?react_perf to URL
// this will cause USER_TIMING section to be added in Chrome Performance recorded statistics
class Repeater extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    // this.props has old value here
    console.log('REPEATER will receive props', nextProps);
  }

  // is not called for initial render
  shouldComponentUpdate(nextProps, nextState) {
    // this.props and this.state both have old values here
    console.log('REPEATER should component update', this.state, nextState);
    return nextState.text !== this.state.text;
  }

  // ON SHOULD_COMPONENT_UPDATE
  // - by default react Component returns true on every state or props update attempt
  // - PureComponent returns true only if props are different then previous or state is different the previous
  // - so it does shallow compare for all params (similar to what is done here for 1 param)

  // is not called for initial render
  componentWillUpdate(nextProps, nextState) {
    console.log('REPEATER component will update', nextProps, nextState);
  }

  // is not called for initial render
  componentDidUpdate(prevProps, prevState) {
    console.log('REPEATER component did update \n\toldState: ', prevState, '\n\tnewState:', this.state);
  }

  // GREAT WAY TO MEASURE ANY PROBLEMS WITH PERFORMANCE
  componentDidMount(){
    setTimeout(() => Perf.start());
    setTimeout(() => {
      Perf.stop();
      console.log("Wasted rerenders:")
      Perf.printWasted();
    }, 5000);
  }

  render() {
    console.log('REPEATER render');
    return (
      <div>
        <input type="test" value={this.state.text} onChange={({target: {value}}) => this.setState({text: value})}/>
        &nbsp;--> {this.state.text}
        <input type="button" value="refresh" onClick={() => this.setState({text: this.state.text})}/>
      </div>
    )
  }
}

export default Repeater;