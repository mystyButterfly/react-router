import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarMain() {
  return (
    <nav>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={"/"}>Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={"/about"}>About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={"/fetch"}>Fetch</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={"/dashboard"}>Dashboard</NavLink>
      </nav>
  )
}

export default NavbarMain
