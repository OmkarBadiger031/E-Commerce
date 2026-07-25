import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">MyStore</div>
        <div className="nav-links">
            <a href="/dashboard">Products</a>
            <a href="/login">Logout</a>
        </div>
    </div>
  )
}

export default Navbar