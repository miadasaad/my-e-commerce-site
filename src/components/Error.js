import React, { Component } from 'react'
import error from './images/error.jpg'

export default class Error extends Component {
    render() {
        return (
            <div className='errorPage'>
                <img src={error} alt='error' />
            </div>
        )
    }
}
