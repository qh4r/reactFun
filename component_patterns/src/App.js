import React, { Component } from 'react';
import Toggle from './Toogle/toogle.componen';

const Button = Toggle.withToggle(function (props) {
  return <button onClick={props.toggle}>CHNAGE!</button>
});


class TestStatics extends React.Component {
  // gets copie thx to hoistNonReactStatics
  static OptionalMessage = Toggle.withToggle(
    ({ on }) =>
      on
        ? 'Warning: The button is toggled on'
        : null);

  render() {
    const { on, toggle } = this.props;
    return (
      <button onClick={toggle}>
        {on ? 'on' : 'off'}
      </button>
    )
  }
}

const TestWrapper = Toggle.withToggle(TestStatics);

class App extends Component {
  render() {
    return (
      <div className="App" style={{ margin: "40px" }}>
        <Toggle onToggle={(status) => console.log("new status is: %s!", status)}>
          <Toggle.On>IS ON</Toggle.On>
          <Toggle.Button />
          <div>
            <Toggle.Off>IS OFF</Toggle.Off>
          </div>
          <Button />
          <br />
          <TestWrapper />
          <TestWrapper.OptionalMessage />
        </Toggle>
      </div>
    );
  }
}

export default App;
