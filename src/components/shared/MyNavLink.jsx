import React from 'react'
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
  return (
     <NavLink
     to={to}
      className={({ isActive }) => 
        `font-semibold${isActive ? "text-purple-600 border border-purple-500 px-3 py-1 rounded" : ""}`}
      >
       {children}
    </NavLink>
  )
}

export default MyNavLink;