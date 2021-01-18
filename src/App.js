import React ,{useState} from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Exercise1 from './Exercise1/Exercise1'
import Exercise2 from './Exercise2/Exercise2'
import Exercise3 from './Exercise3/Exercise3'
import Exercise4 from './Exercise4/Exercise4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks Exercises</h1>
        <ul className="navbar">
          <li className="nav_item">
            <Link className="App-link" to="/exercise1">
              Exercise#1
            </Link>
          </li>
          <li className="nav_item">
            <Link className="App-link" to="/exercise2">
              Exercise#2
            </Link>
          </li>
          <li className="nav_item">
            <Link className="App-link" to="/exercise3">
              Exercise#3
            </Link>
          </li>
          <li className="nav_item">
            <Link className="App-link" to="/exercise4">
              Exercise#4
            </Link>
          </li>
         </ul>
      </header>
    <Switch>
      <Route path="/exercise1" component={Exercise1}/>
      <Route path="/exercise2" component={Exercise2}/>
      <Route path="/exercise3" component={Exercise3}/>
      <Route path="/exercise4" component={Exercise4}/>
    </Switch>

    </div>
  );
}


export default App;
