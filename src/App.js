import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Home, Products, Checkout, ContactUs} from './Routes'

import {BrowserRouter, Route, Link} from 'react-router-dom'

export class App extends Component{

render(){
  return(
    <BrowserRouter>
    <div>

      <div className="App-header-section">
        <Link to ="/Home" className="App-header-menu" >Home</Link>
        <Link to ="/Products" className="App-header-menu">Products</Link>
        <Link to ="/Checkout" className="App-header-menu">Checkout</Link>
        <Link to ="/ContactUs" className="App-header-menu">Contact Us</Link>
      </div>

      <Route path="/Home" component={Home}/>
      <Route path="/Products" component={Products}/>
      <Route path="/Checkout" component={Checkout}/>
      <Route path="/ContactUs" component={ContactUs}/>
    </div>
    </BrowserRouter>
  )
}

}

export default App;