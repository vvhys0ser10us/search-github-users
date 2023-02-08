import React, { useEffect } from 'react'
import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import { useContext, useState } from 'react'
import axios from 'axios'

const GithubContext = React.createContext()

const baseURL = 'https://api.github.com'

const ContextProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser)
  const [gitRepos, setGitRepos] = useState(mockRepos)
  const [gitFollowers, setGitFollowers] = useState(mockFollowers)

  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  const checkLimit = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/rate_limit`)
      const {
        rate: { remaining },
      } = data
      if (remaining === 0) {
        setError({ show: true, msg: 'reached rate limit' })
      }
      setRequests(remaining)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkLimit()
  }, [])

  const searchUser = async (user) => {
    setLoading(true)
    setError({ show: false, msg: '' })
    try {
      const res = await axios.get(`${baseURL}/users/${user}`)
      setGitUser(res.data)
      setLoading(false)
    } catch (error) {
      if (error.response.status === 404) {
        setError({ show: true, msg: 'user not found' })
      }
      setLoading(false)
    }
  }

  return (
    <GithubContext.Provider
      value={{
        gitUser,
        gitRepos,
        gitFollowers,
        searchUser,
        requests,
        error,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GithubContext)
}

export { ContextProvider, useGlobalContext }
