import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Category from './Category'
import { connect } from 'react-redux';

class Categories extends Component {

    render() {
        const { products } = this.props
        let arr1 = products.slice(0, 4)
        let arr2 = products.slice(4, 8)
        let arr3 = products.slice(8, 13)
        return (
            <section className='categories'>
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Camcorder">
                        <Category array={arr1} />
                    </Tab>
                    <Tab eventKey="profile" title="Box Camera">
                        <Category array={arr2} />
                    </Tab>
                    <Tab eventKey="contact" title="Webcam">
                        <Category array={arr3} />
                    </Tab>
                </Tabs>
            </section>

        )
    }
}

function mapStateToProps({ products }) {

    return {
        products: products.products
    }
}

export default connect(mapStateToProps)(Categories)