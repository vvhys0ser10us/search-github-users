import React from 'react'
import { User, Repos, Search, Navbar, Info } from '../components'
import { useGlobalContext } from '../context/context'
import preloader from '../images/preloader.gif'

const Dashboard = () => {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <img src={preloader} alt="laoding" className="loading-img" />
      </main>
    )
  }
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
