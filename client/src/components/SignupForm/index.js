import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../../actions/userActions'

const SignupForm = ({ users, createUser }) => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    createUser(form)
  }

  return (
    <>
      {users.user.isAuthenticated ? <Redirect to='/home' /> : null}
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
          Already a member?
          <a href='/'> Login</a>
        </p>

        <p>or</p>
        <a className='nav-link' href='api/auth/google'>
          Continue with Google
        </a>

        {/*<GoogleLogin
          clientId=''
          onSuccess={() => setAuthenticated(true)}
          cookiePolicy={'single_host_origin'}
        />*/}
        <p>{users.error}</p>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { createUser })(SignupForm)
