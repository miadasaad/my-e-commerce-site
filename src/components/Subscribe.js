import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export default function Subscribe() {
    return (
        <div className='subscribe'>
            <div className='sign-logo'>
                <span><AiOutlineMail></AiOutlineMail></span>
                <span>signup newsletter</span>
            </div>
            <div className='input-sub'>
                <input type='text' placeholder='your email address' />
                <button className>subscribe</button>
            </div>
            <div className='sign-logo'>
                <span><AiOutlineMail></AiOutlineMail></span>
                <span>signup newsletter</span>
            </div>

        </div>
    )
}
