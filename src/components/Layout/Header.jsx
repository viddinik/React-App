import React from 'react'
import './Header.css'
import HeaderButton from './HeaderButton'

const Header = () => {
    return (
        <div className='header'>
            <h1>React App Store</h1>
            <HeaderButton/>
        </div>
    )
}

export default Header
