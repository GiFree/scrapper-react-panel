import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Panel from './Panel/Panel';
import Search from './Search/Search';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/panel" component={Panel} />
          <Route path="/search" component={Search} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
