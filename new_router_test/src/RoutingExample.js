import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Start = () => <h1>Start</h1>

const RoutingExample = ({children}) => (
  <Router>
    {/*now router can only has 1 element and each route will render if it's start match*/}
    <div>
      { children }
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

      <Route strict path="/:count" render={({match}) => <p>params: {match.params.count}</p>}></Route>
      {/* match is null safe and ? makes params optional*/}
      <Route strict path="/:count?" render={({match}) => <p>optional params: {match.params.count  || 'nada'}</p>}></Route>
      {/* you can make params match only when passing regex*/}
      <Route strict path="/:count(\d+)" render={({match}) => <p>numbers only: {match.params.count }</p>}></Route>


      {/* ROUTE WITHOUT PATH NAME WILL ALWAYS RENDER*/}
      <Route render={({match, location}) => (
        <p>id: {new URLSearchParams(location.search).get('id')}</p>
      )}>
      </Route>
      {/* such way to retrieve search works, at least in chrome*/}

      {/* SWTICH ONLY RENDERS FIRST MATCHED ROUTE*/}
      <h1>SWITCH</h1>
      <Switch>
        <Route exact path='/' render={() => <p>HOME</p>}/>
        <Route exact path='/start' render={() => <p>START</p>}/>
        <Route exact path='/test' render={() => <p>TEST</p>} />
      </Switch>
    </div>
  </Router>
);

// if match object exists route is visible by default (different with children)

export default RoutingExample;
