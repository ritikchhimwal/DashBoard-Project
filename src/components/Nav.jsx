import React from 'react'
import './nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'

const Nav = () => {
  return (
    <div className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            <NavNotice/>
            <NavMessage/>
            <NavAvatar/>
        </ul>
    </div>
  )
}

export default Nav