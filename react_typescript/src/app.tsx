//npm i -S react react-dom webpack webpack-dev-server typescript @types/react @types/react-dom ts-loader webpack-cli

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactChildren, ReactNode } from "react";

interface AppProps {
  message: string,
  children?: ReactNode
}

// React SFC is type for stateless functional components
const App: React.SFC<AppProps> = ({ message, children }) => {
  return (
    <div>
      <div>TEST {message} </div>
      <div>
        {children}
      </div>
    </div>
  )
};

interface SumComponentProps {
  a: number,
  b: number,
}

interface SumComponentState {
  isOpen: boolean
}

class SumComponent extends React.Component<SumComponentProps, SumComponentState> {
  state: SumComponentState = {
    isOpen: false,
  };

  private onToggle = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {a,b} = this.props;
    return (
      <div>
        Sum:
        <span>{this.state.isOpen ? `>>${a+b}<<` : 'hidden'}</span>
        <button onClick={this.onToggle}>Toggle Visibility</button>
      </div>
    );
  }
}

ReactDOM.render(<App message="some message asd">
  <SumComponent a={32} b={43}/>
</App>, document.getElementById("root"));
