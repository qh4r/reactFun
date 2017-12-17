import * as React from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch/switch.component';
import hoistNonReactStatics from 'hoist-non-react-statics';

const TOGGLE_CONTEXT = '__toggle__';

// Compound components


function withToggle(Component) {
  const Wrapper = class extends React.Component {
    static contextTypes = {
      [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };

    render() {
      return (<Component {...this.props} {...this.context[TOGGLE_CONTEXT]} />);
    }
  };
  Wrapper.displayName = 'withToggle';

  // copies non react statics from Component to Wrapper (and returns wrapper);
  return hoistNonReactStatics(Wrapper, Component);
}

function ToggleOn({ children }, context) {
  const { on } = context[TOGGLE_CONTEXT];
  return on ? children : null
}

ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

function ToggleButton(props, context) {
  const { on, toggle } = context[TOGGLE_CONTEXT];
  return (
    <Switch on={on} onClick={toggle} {...props} />
  )
}

ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

// can use with hoc

const ToggleOff = withToggle(({on, children}) => on ? null : children);

ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};


class Toggle extends React.Component {
  static defaultProps = {
    onToggle: () => {
    },
  };
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static withToggle = withToggle;
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  state = { on: false };

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      },
    );

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle,
      },
    }
  }

  render() {
    // USAGE W/O context and control

    // its best practice to clone elements instead mutating them when mapping children

    // const children = React.Children.map(
    //   this.props.children,
    //   child => React.cloneElement(child, {
    //     on: this.state.on,
    //     toggle: this.toggle,
    //   }),
    // );
    return (
      <div>{this.props.children}</div>
    )
  }
}

// <Switch on={on} onClick={this.toggle} />

export default Toggle;