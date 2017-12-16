import React, { Component } from 'react';
import Toggle from './Toogle/toogle.componen';

class App extends Component {
  render() {
    return (
      <div className="App" style={{margin: "40px"}}>
        <Toggle onToggle={(status) => console.log("new status is: %s!", status)} />
      </div>
    );
  }
}

export default App;
