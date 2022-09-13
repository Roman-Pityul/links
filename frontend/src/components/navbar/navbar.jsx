import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../../redux/slices/userSlice'

import './navbar.scss'

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <nav className='navbar blue accent-2'>
      <div className="nav-wrapper">
        <span className="brand-logo">Сократи ссылку</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/create">Создать ссылку</Link></li>
          <li><Link to="/links">Ссылки</Link></li>
          <li><Link onClick={() => dispatch(logout())} to="">Выход</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar