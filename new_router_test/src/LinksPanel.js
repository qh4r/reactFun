import React from 'react';
import './LinksPanel.css'

import {
  Link,
  NavLink
} from 'react-router-dom'

function isActive(...params) { //match, location
  console.log(params);
  const [match] = params;
  return match
}

// EVERY LINK MUST BE A CHILD OF ROUTER
const LinksPanel = () => (
  <div>
    <nav>
      <Link to="/">Index</Link>
      <Link to="/start">Start</Link>
      <Link to={{ pathname: "/start/" }}>Start Strict</Link>
      {/* REPLACE causes linkt to replace last history record instead of adding new one */}
      <Link replace to="/test">Test</Link>
    </nav >
    NAV:
    { /* nav links allow to track active link by adding active class*/ }
    <nav>
      <NavLink exact to="/">Index</NavLink>
      {/* we can specify inline active style*/}
      <NavLink activeStyle={{color: 'yellow'}} strict to="/start">Start</NavLink>
      <NavLink strict to={{ pathname: "/start/" }}>Start Strict</NavLink>
      {/* it's also possible to change active class name*/}
      <NavLink isActive={isActive} activeClassName="test" exact to="/test">Test</NavLink>
    </nav>
    {/* strict and exact work the same way they do on Route*/}
    query:
    <div>
      {/* search is translated to query*/}
      <Link to={{pathname:'/', search: 'id=123'}}>Navigate to query ?id=123</Link>
    </div>
  </div>
);

// isActive function runs on match attempt and decides if link is active (can plug in there)



export default LinksPanel;