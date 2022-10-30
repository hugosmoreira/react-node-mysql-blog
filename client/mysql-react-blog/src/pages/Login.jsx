import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='password' />
        <button required className='btn'>Login</button>
        <span>Don't you have an account?</span> <Link to="/register">Register</Link>
      </form>
    </div>
  )
}

export default Login