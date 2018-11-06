import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './views/Landing.jsx';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
