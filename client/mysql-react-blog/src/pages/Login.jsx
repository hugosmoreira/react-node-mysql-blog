import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button className='btn'>Login</button>
      </form>
    </div>
  )
}

export default Login