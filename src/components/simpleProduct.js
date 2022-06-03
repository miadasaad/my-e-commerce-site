import React, { Component } from 'react'
import HiddenIcons from './hiddenIcons'
import Rating from './rating'
import { saveProduct } from '../actions/shared'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

class SimpleProduct extends Component {

    handleClick(e) {
        this.props.dispatch(saveProduct(e))
    }

    render() {
        return (
            <div className="category" key={this.props.element.name}>
                <div className="image">
                    <img className="animated wow fadeInLeft" data-wow-delay='1s' alt='lorem ipsum' src={this.props.element.images[0].url} onMouseOver={e => (e.currentTarget.src = this.props.element.images[1].url)} onMouseOut={e => (e.currentTarget.src = this.props.element.images[0].url)} />

                </div>
                <div className="save">
                    {this.props.element.discount ? <span>{this.props.element.discount}</span> : null}
                </div>
                <HiddenIcons id={this.props.element.id} element={this.props.element} handleClick={this.handleClick} />
                {this.props.element.rate ?
                    <Rating /> : <div></div>}

                {!this.props.element.rate && !this.props.element.timer ? <div style={{ marginTop: "50px" }}></div> : null}
                <div className="descriptions">
                    <p>{this.props.element.name}</p>
                    <span>${this.props.element.price}</span>
                    <button onClick={() => { this.handleClick(this.props.element) }} ><FaCartPlus></FaCartPlus></button>
                </div>

            </div>
        )
    }
}
function mapStateToProps({ products }) {
    return {
        products: products.products
    }
}

export default connect(mapStateToProps)(withRouter(SimpleProduct))