import React, { Component } from 'react'
import HiddenIcons from './hiddenIcons';
import Rating from './rating';

export default class Seller extends Component {
    render() {
        return (
            <div className='seller' style={{ display: "flex" }}>
                <div className="image">
                    <img alt='lorem ipsum' src={this.props.item.images[2].url} onMouseOver={e => (e.currentTarget.src = this.props.item.images[3].url)} onMouseOut={e => (e.currentTarget.src = this.props.item.images[2].url)} />
                </div>
                <HiddenIcons />

                <div className="descriptions">
                    <p>{this.props.item.name}</p>
                    <span>{this.props.item.price}</span>
                    <Rating />
                </div>
            </div>
        )
    }
}
