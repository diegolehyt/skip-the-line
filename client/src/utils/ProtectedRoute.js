import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userActions'

function ProtectedRoute ({ component: Component, users, getUser, ...rest }) {
  useEffect(() => {
    getUser()
  })
  return (
    <>
      {users.loading ? (
        <div />
      ) : (
        <Route
          {...rest}
          render={props =>
            !users.user.isAuthenticated ? (
              <Redirect to='/' />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps, { getUser })(ProtectedRoute)
