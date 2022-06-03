import React, { Component } from 'react'
import { FaRegHeart, FaEye } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi'
import { Link } from 'react-router-dom'


class HiddenIcons extends Component {

    render() {

        return (
            <div className="hidden-icons">
                <ul>
                    <li className="btn-slide-down"><FaRegHeart></FaRegHeart></li>
                    <li className="btn-slide-down"><Link to={`/products/${this.props.id}`} ><FaEye></FaEye></Link></li>
                    <li className="btn-slide-down"><FiRefreshCcw></FiRefreshCcw></li>
                </ul>
            </div>
        )
    }

}
export default HiddenIcons