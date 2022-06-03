import React, { Component } from 'react'
import slide1 from './images/slider-01-1265x485.jpg'
import Category from './Category'
import { connect } from 'react-redux';


class Products extends Component {
    render() {
        const { products } = this.props
        return (
            <div className='content my-products'>
                <div>
                    <img src={slide1} alt='back pro' />
                </div>
                <div className='products' style={{ marginTop: '25px' }}>
                    <h3 className='heading'>Our Products</h3>
                    <div className='searching'>

                    </div>
                    <Category array={products} />
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
export default connect(mapStateToProps)(Products)