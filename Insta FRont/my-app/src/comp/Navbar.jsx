import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/login"> login</Link>
      </div>
      <div>
        home
      </div>
      <div>
        setting
      </div>
    </div>
  )
}
