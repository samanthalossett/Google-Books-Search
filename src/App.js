import React from 'react';
import Jumbotron from './components/Jumbotron';
// import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={Jumbotron} />
        <Route exact path="/" component={Search} />

      </div>
    </Router>
  );
}

export default App;
