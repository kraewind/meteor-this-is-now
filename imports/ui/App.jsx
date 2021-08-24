import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Values } from './Values'
import { ValueForm } from './ValueForm';
import { Goals } from './Goals'; 
import { Home } from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/values">Values</Link>
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/goals">
            <Goals />
          </Route>
          <Route exact path="/values">
            <ValueForm />
            <Values />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default(App)
