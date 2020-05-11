import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import About from './components/About';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home';
import Layout from './components/Layout'
import Register from './components/Register';

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
        <Layout>
        <Header />
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
          <Footer />
        </Layout>
    </Router>
  );
}

export default App;
