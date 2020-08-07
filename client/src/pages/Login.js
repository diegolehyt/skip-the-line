import React, { useState } from 'react'
import Video from '../components/Video'
import Mask from '../components/Mask'
import Container from '../components/Container'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

const Login = () => {
  const [redirect, setRedirect] = useState(false)

  const signup = userData => {
    // API call to post user data
    setRedirect(true)
  }

  const responseGoogle = response => {
    console.log(response)
    console.log(response.profileObj)
    signup(response.profileObj)
  }
  return (
    <>
      {redirect ? <Redirect to='/home' /> : null}
      <GoogleLogin
        clientId='526393775648-degj5i87qn5khamnkt7qomims62jdo3n.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}

export default Login
