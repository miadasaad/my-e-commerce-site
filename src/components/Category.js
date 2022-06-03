import React, { Component } from 'react'
import SimpleProduct from './simpleProduct'


export default class Category extends Component {

    render() {

        return (

            <div className="Mycategories">
                {this.props.array.map((item, index) => {
                    return <SimpleProduct element={item} key={index} />
                })}

            </div>

        )
    }
};
