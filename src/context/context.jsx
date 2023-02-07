import React from 'react'
import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import { useContext } from 'react'

const GithubContext = React.createContext()

const ContextProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'helloworld'}>
      {children}
    </GithubContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GithubContext)
}

export { ContextProvider, useGlobalContext }
