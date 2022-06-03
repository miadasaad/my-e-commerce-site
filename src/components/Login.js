import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div className='login'>
                <h3>Log in</h3>
                <form>
                    <input type='text' placeholder="please enter your e-mail" />
                    <input type='password' placeholder='password' />
                    <button className='btnn btn-primary' type='submit'>Submit</button>
                </form>
                <span>forget password?</span>
                <Link to='/signup'><span>have no account?</span> Sign Up</Link>
            </div>
        )
    }
}

export default Login
