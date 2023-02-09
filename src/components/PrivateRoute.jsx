import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0()
  if (!isAuthenticated) return <Navigate to="/login"></Navigate>

  return children
}

export default PrivateRoute
