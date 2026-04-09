import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <div className="navBar">
        <ul>
            <li>Main</li>
            <li>Cart</li>
            <li>Log in/out</li>
            <li>Settings</li>
        </ul>
        <div className="center">
          <h1>Online Shop</h1>
          <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3626HmqfFWQDzHzNFaHc_RfO68nS5qQqQg&s" alt="Online shops logo" />
        </div>
        <ul>
            <li>Main</li>
            <li>Cart</li>
            <li>Log in/out</li>
            <li>Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
