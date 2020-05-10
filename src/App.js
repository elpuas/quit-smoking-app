import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import About from './components/About';


function App() {
  const [ users, setUsers] = useState([])
  const [ quotes, setQuotes] = useState([])

  // Hardwire Users replace with DBQuery
  // const users = [
  //   {
  //     name:'string',
  //     id: 000,
  //     slug:'string',
  //     quitdate: 00000000,
  //     whyquote: 'string',

  //   }
  // ]

  // const quotes = [
  //   {
  //     quote:'string',
  //   }
  // ]

  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={() => (
            <Dashboard />
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <Register />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <About />
          )}
        />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
