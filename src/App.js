import React, { Component} from 'react';
import {BrowserRouter,
Route,
Switch,
Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Categories from './components/Categories'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/categories" component={Categories}/>

        </Switch>
      </div>
      </BrowserRouter>
  );
}
}

export default App;
