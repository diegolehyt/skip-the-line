import React, { useState } from 'react'
import Video from '../components/Video'
import Mask from '../components/Mask'
import Container from '../components/Container'
import { Redirect, Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

const Login = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post('/api/auth/register', form).then(res => {
      if (res.data === 'Successfully Authenticated') setAuthenticated(true)
    })
  }

  return (
    <>
      {authenticated ? <Redirect to='/home' /> : null}
      <div className='row justify-content-center'>
        <div className='col-5'>
          <form
            className='text-center border border-light p-5'
            action='#!'
            onSubmit={handleSubmit}
          >
            <p className='h4 mb-4'>Sign Up</p>

            <input
              type='email'
              id='defaultLoginFormEmail'
              className='form-control mb-4'
              placeholder='E-mail'
              name='email'
              onChange={handleChange}
            />

            <input
              type='password'
              id='defaultLoginFormPassword'
              className='form-control mb-4'
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />

            <div className='d-flex justify-content-around'>
              <div>
                <div className='custom-control custom-checkbox'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='defaultLoginFormRemember'
                  />
                  <label
                    className='custom-control-label'
                    for='defaultLoginFormRemember'
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div>
                <a href=''>Forgot password?</a>
              </div>
            </div>
            <button className='btn btn-info btn-block my-4' type='submit'>
              Sign Up
            </button>

            <p>
              Not a member?
              <a href=''> Register</a>
            </p>

            <p>or</p>
            <a className='nav-link' href='api/auth/google'>
              Continue with Google
            </a>
            <GoogleLogin
              clientId='526393775648-degj5i87qn5khamnkt7qomims62jdo3n.apps.googleusercontent.com'
              onSuccess={() => setAuthenticated(true)}
              cookiePolicy={'single_host_origin'}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
