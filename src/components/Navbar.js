import React, { Component } from 'react'
import logo from './images/logo.png'
import { FaUser, FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {

        return (
            <nav className='nav-bottom '>
                <Link to='/'>
                    <img src={logo} alt='beach' />
                </Link>
                <div className='menu-middle d-lg-none'>
                <ul className=' justify-content-center'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contactUs'>contact Us</Link>
                    </li>
                    <li>
                            <Link className='btn-slide-left' to='/login'><FaUser></FaUser> Login</Link>
                        </li>
                        <li>
                            <Link className='btn-slide-left' to='/cart'><FaCartPlus></FaCartPlus> <span className="number">{this.props.cart.length}</span> Cart</Link>
                        </li>
                </ul>
                
                       
                   
                </div>
                <ul className='midlle-nav justify-content-center '>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contactUs'>contact Us</Link>
                    </li>
                </ul>
                <div>
                    <ul className='right-nav'>
                        <li>
                            <Link className='btn-slide-left' to='/login'><FaUser></FaUser> Login</Link>
                        </li>
                        <li>
                            <Link className='btn-slide-left' to='/cart'><FaCartPlus></FaCartPlus> <span className="number">{this.props.cart.length}</span> Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ cart }) {
    return {
        cart: cart.cart
    }
}
export default connect(mapStateToProps)(Navbar)

