import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import WebPortfolio from './Components/WebPortfolio';
import ArtPortfolio from './Components/ArtPortfolio';
import Page404 from './Page404';


class App extends Component {
  render() {
    return (
      <div>
          <h1>Crystals Portfolio </h1>
          <Switch>
            <Redirect exact from='/' to ='/WebPortfolio'/>
            <Route path='/WebPortfolio' component={WebPortfolio}/>
            <Route path='/ArtPortfolio' component={ArtPortfolio}/>
            <Route component={Page404}/>
          </Switch>
      </div>
    );
  }
}

export default App;
