import React from 'react'
import { useGlobalContext } from '../context/context'
useGlobalContext

const Navbar = () => {
  const testing = useGlobalContext()
  return <div>{testing}</div>
}

export default Navbar
