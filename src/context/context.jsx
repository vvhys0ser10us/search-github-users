import React from 'react'
import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import { useContext, useState } from 'react'

const GithubContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser)
  const [gitRepos, setGitRepos] = useState(mockRepos)
  const [gitFollowers, setGitFollowers] = useState(mockFollowers)

  return (
    <GithubContext.Provider value={{ gitUser, gitRepos, gitFollowers }}>
      {children}
    </GithubContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GithubContext)
}

export { ContextProvider, useGlobalContext }
