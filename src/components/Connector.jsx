import React, { Component } from 'react';
import Navigation from './Navigation'
import Login from './Login'
import Footer from './Footer'
import HomePage from './HomePage'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


class Connector extends Component {
  

    constructor(props) {
        super(props);
    }

    render() {
        return (
		  <BrowserRouter>
		    <Navigation />
		      <Switch>
		      	<Route exact path='/' component={Login}/>
		      	<Route exact path ='/home' component={HomePage}/>
		      	<Redirect to='/' />
		      </Switch>
		    <Footer />
		   </BrowserRouter>
        );
    }
}

export default Connector;
