import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/Login'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {
render() {
	  return (
	  	<div class='App'>
	  	 <BrowserRouter>
		    <Navigation />
		      <Switch>
		      	<Route exact path='/' component={Login}/>
		      	<Route exact path ='/home' component={HomePage}/>
		      	<Redirect to='/' />
		      </Switch>
		    <Footer />
		   </BrowserRouter>
		 </div>
	  );
	}
}

export default App;
