import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import '../App.css'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Navbar from './Navbar';
import MyNav from './myNavbar'
import Products from './Products';
import Error from './Error';
import { Login } from './Login';
import signup from './signup';
import SingleProduct from './singleProduct'
import Cart from './cart'
import Subscribe from './Subscribe'
import CopyRight from './CopyRight';
import Footer from './Footer';
import ContactUs from './contactUs';
import About from './about'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <Router>
        {/* <Navbar /> */}
        <MyNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={SingleProduct} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={signup} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/contactUs' component={ContactUs} />
          <Route exact path='/about' component={About} />
          <Route component={Error} />
        </Switch>
        <Subscribe />
        <Footer />
        <CopyRight />
      </Router>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(App);

