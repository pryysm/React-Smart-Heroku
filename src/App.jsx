import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import "rc-progress/assets/index.css";
import HeaderNavbars from './components/HeadComponent';
import GoalsBodyComp from './components/Goals/GoalsBodyComponent';
import FooterComp from './components/FooterComponent';
import MainComp from './components/Main/MainBodyComponent';
import PeoplesComp from './components/Peoples/PeopleComponent';

function App() {
  return (
    <div>
      <div className="App-header">
        <HeaderNavbars />
      </div>
      <div className="App-body">
        <Switch>
          <Route exact path="/">
            <MainComp />
          </Route>
          <Route path="/goals">
            <GoalsBodyComp />
          </Route>
          <Route path="/user">
            <PeoplesComp />
          </Route>
        </Switch>
      </div>

      <div className="App-footer">
        <hr />
        <FooterComp />
      </div>
    </div>
  );
}

export default App;
