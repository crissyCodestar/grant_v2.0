import React, { Component } from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import WebPortfolio from './Components/WebPortfolio';
import ArtPortfolio from './Components/ArtPortfolio';
import Page404 from './Page404';
import {Button} from './Components/UIComponents/Button';
import './App.css';
import Header from './Components/Header';


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    console.log(location);
    return (
      <div>
          <Header />
          <Link to='/ArtPortfolio'>
            <Button text='Art Portfolio' type='enter' colorValue='primary_gradient' />
          </Link>
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
