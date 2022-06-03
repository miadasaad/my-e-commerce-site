import React, { Component } from 'react'
import Category from './Category'
import { connect } from 'react-redux'
class Featured extends Component {

    render() {
        const { products } = this.props
        const product = products.filter(item => {
            return (
                item.featured === true
            )
        })
        return (
            <div style={{ marginTop: '25px' }}>
                <h3 className='heading'>Featured</h3>
                <Category array={product} />
            </div>
        )
    }
}
function mapStateToProps({ products }) {
    return {
        products: products.products
    }
}
export default connect(mapStateToProps)(Featured)