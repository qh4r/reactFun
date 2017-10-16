let sendToErrorReporting = (error, info) => {
  console.log('loggin manually:', error, info);
}


class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, hasError: true }));
    sendToErrorReporting(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>;
    } else {
      return this.props.children;
    }
  }
}

class Profile extends React.Component {
  onClick = () => {
    this.setState(state => {
      throw new Error("Oh nooo!");
      return { ...state };
    });

    // something thrown outside of lifecycle method or set state would not be cought
    // throw new Error("Oh nooo!");
  };

  render() {
    return (
      <div onClick={this.onClick}>
        Name: {this.props.user.name}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "Chris" },
    };
  }

  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </MyErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
