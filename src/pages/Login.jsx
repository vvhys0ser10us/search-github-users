import React from 'react'
import styled from 'styled-components'
import login_img from '../images/login-img.svg'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Wrapper>
      <div className="container">
        <img src={login_img} alt="login image" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Login
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2em;
  }
  h1 {
    margin-bottom: 1.5em;
  }
`

export default Login
