import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

function ProtectedRoute ({ component: Component, user, ...rest }) {
  const [isAuthenticated, setAuthenticated] = useState(true)
  useEffect(() => {
    axios.get('/api/auth/user').then(res => {
      console.log(res.data)
      setAuthenticated(true)
    })
  }, [])
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}

export default ProtectedRoute
