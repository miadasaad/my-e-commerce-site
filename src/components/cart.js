import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { Container, Col, Row } from 'react-bootstrap'
import { deleteProduct, increment, decrement } from '../actions/shared'


export class Cart extends Component {
    state = {
        count: 1
    }
    deleteHandler(id) {
        this.props.dispatch(deleteProduct(id))
    }
    handleIncrement(id) {
        this.props.dispatch(increment(id))
    }

    handleDecrement(id) {
        this.props.dispatch(decrement(id))
    }
    render() {
        return (
            <div className='content' style={{ color: 'black' }}>
                <h3 className='heading'>Your shopping cart</h3>
                {this.props.cart.length ? this.props.cart.map((item, index) => {
                    return (
                        <Container fluid>
                            <Row>
                                <Col xs={10}>
                                    <div className='cart-item cart-place' key={index}>
                                        <div>
                                            <img src={item.product.images[0].url} alt='' />
                                        </div>
                                        <div>
                                            <span>{item.product.name}</span>
                                        </div>
                                        <div>
                                            <button onClick={() => { this.handleDecrement(item.product.id) }}><AiFillMinusCircle></AiFillMinusCircle></button> {item.product.count}<button onClick={() => { this.handleIncrement(item.product.id) }}><AiFillPlusCircle></AiFillPlusCircle></button>
                                        </div>
                                        <div>
                                            <span>${item.product.price * item.product.count}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={2}>
                                    <div className='cart-place'>
                                        <button onClick={() => { this.deleteHandler(item.product.id) }}><AiFillCloseCircle></AiFillCloseCircle></button>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    )
                }) : <p>your cart is empty</p>}

            </div>
        )
    }
}

function mapStateToProps({ cart }) {

    return {
        cart: cart.cart
    }
}
export default connect(mapStateToProps)(Cart)
