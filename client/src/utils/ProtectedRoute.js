import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../actions/userActions'

function ProtectedRoute ({ component: Component, user, getUser, ...rest }) {
  getUser()
  return (
    <>
      {console.log(user.loading)}
      {user.loading ? (
        <div />
      ) : (
        <Route
          {...rest}
          render={props =>
            !user.user.isAuthenticated ? (
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
    user: state.user
  }
}
export default connect(mapStateToProps, { getUser })(ProtectedRoute)
