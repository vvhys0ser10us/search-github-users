import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import preloader from '../images/preloader.gif'
import styled from 'styled-components'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading)
    return (
      <Wrapper>
        <img src={preloader} alt="loading" />
      </Wrapper>
    )

  if (error)
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    )

  return children
}

const Wrapper = styled.section`
  display: grid;
  min-height: 100vh;
  place-items: center;
  img {
    width: 150px;
  }
`

export default AuthWrapper
