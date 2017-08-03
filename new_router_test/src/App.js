import React, { Component } from 'react';
import './App.css';
import RoutingExample from './RoutingExample';
import LinksPanel from './LinksPanel';

const App = () => (
  <div>
    <RoutingExample>
      <LinksPanel />
    </RoutingExample>
  </div>
);

export default App;
