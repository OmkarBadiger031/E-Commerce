import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    axios.get('http://localhost:3000/users')
      .then((x) => {
        let users = x.data

        let result = users.find((x) => {
          return (x.email === email && x.password === password)
        })

        if (result) {
          console.log("Before Navigate")
          console.log(result)

          toast.success('Login Success...')

          localStorage.setItem('userId', result.id)
          localStorage.setItem('username', result.name)
          localStorage.setItem('isLoggedIn', true)

          setEmail('')
          setPassword('')

          navigate('/Dashboard')

          console.log("After Navigate")
        }
        else {
          toast.error('Failed')
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error')
      })
  }

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h2>Login Page</h2>

          <input
            type="text"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />

          <button id="login" type="submit">
            Login
          </button>

          <p style={{ textAlign: 'center' }}>
            New User? <Link to={'/signup'}>Signup</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login