import React, { Component } from 'react'
import logo from './images/logo.png'
import { FaUser, FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Navbar, Container, Nav,  Form } from 'react-bootstrap';

class NavbarMake extends Component {

  render() {

    return (

      <Navbar className='nav-bottom ' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"> <Link to='/'>
            <img src={logo} alt='beach' />
          </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Link to='/'>Home</Link>
              <Link to='/products'>Products</Link>
              <Link to='/about'>About</Link>
              <Link to='/contactUs'>Contact Us</Link>
            </Nav>
            <Form className="d-flex right-nav">
              <Link className='btn-slide-left' to='/login'><FaUser></FaUser> Login</Link>
              <Link className='btn-slide-left' to='/cart'><FaCartPlus></FaCartPlus> <span className="number">{this.props.cart.length}</span> Cart</Link>
              {/* <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }
}

function mapStateToProps({ cart }) {
  return {
    cart: cart.cart
  }
}
export default connect(mapStateToProps)(NavbarMake)

