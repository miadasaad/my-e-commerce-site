import React, { Component } from 'react'
import DealProduct from './DealProduct';

export default class Deal extends Component {
    render() {

        return (
            <div>
                <div className=" deal">
                    <div className="heading">
                        <h2>Deal of the day</h2>
                    </div>
                    <hr className="deal-hr" /><hr className="deal-hr" />
                    <span className="vertical"></span>
                    <div>
                        <div>
                            <div>
                                <DealProduct />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
