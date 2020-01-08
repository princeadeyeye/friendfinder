import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/Login'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Register from './components/Register'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
  	<BrowserRouter>
	    <div class='App'>
	      <Navigation />
	      <Login />
	      <Footer />
	    </div>
	 </BrowserRouter>
  );
}

export default App;
