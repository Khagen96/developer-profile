import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeveloperProfile from './Pages/DevloperProfile';
import HomePage from './Pages/HomePage';

function App() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/developers/:developerId" component={DeveloperProfile} />
            <Route exact path="/" component={HomePage} />
          </Switch>
      </Router>
    );
  }
  



 
ReactDOM.render(
<App />,
 document.getElementById('root')
);