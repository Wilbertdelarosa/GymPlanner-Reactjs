import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Planner from './components/pages/Planner';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';
import Footer from './components/Footer';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>

       <Navbar/>
       
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Planner' exact component={Planner} />
          <Route path='/Products' exact component={Products} />
          <Route path='/SignUp' exact component={SignUp} />
        </Switch>
        
        <Footer/>
      </Router>
    </>
  );
}

export default App;