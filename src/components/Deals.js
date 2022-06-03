import React, { Component } from 'react'
import Deal from './Deal'
import DailyProduct from './DailyProduct';

export default class Deals extends Component {
    render() {
        return (
            <div className='deals'>
                <Deal />
                <DailyProduct />
            </div>
        )
    }
}
