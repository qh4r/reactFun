import * as React from "react";
import { App, SumComponent } from "./app";
import * as ReactDOM from "react-dom";

ReactDOM.render(<App message="some message asd">
  <SumComponent a={32} b={43}/>
</App>, document.getElementById("root"));