import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Start = () => <h1>Start</h1>

const RoutingExample = () => (
  <Router>
    {/*now router can only has 1 element and each route will render if it's start match*/}
    <div>
      {/*exact solves matching problem*/}
      <Route exact path="/" component={Start}></Route>
      <Route exact path="/start" component={Start}></Route>
      {/*strict cares about trailing '/' exact not*/}
      <Route strict path="/start/" render={() => <p>this will show up only if /start/ is fully matched</p>}></Route>
      {/* children runs always so if you dont use match it will render its content whatever the route */}
      <Route path="/test" children={({ match }) => match && <p>this needs to match</p>}></Route>
      <Route path="/test" children={(props) => {
        console.log(props);
        return <p>this do not need to match</p>
      }}></Route>
    </div>
  </Router>
);

// if match object exists route is visible by default (different with children)

export default RoutingExample;
