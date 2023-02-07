import React from 'react'
import { User, Repos, Search, Navbar, Info } from '../components'

const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
    </main>
  )
}

export default Dashboard
