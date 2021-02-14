import React from 'react';
import Navbar from './pages/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sports from './components/Sports';
import Lifestyle from './components/Lifestyle';
import Health from './components/Health';
import Love from './components/Love';
import Fashion from './components/Fashion';
import SignUp from './components/SignUp';
import News from './components/News';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={News} />
          <Route path='/fashion' component={Fashion} />
          <Route path='/health' component={Health} />
          <Route path='/love' component={Love} />
          <Route path='/lifestyle' component={Lifestyle} />
          <Route path='/sports' component={Sports} />


          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;