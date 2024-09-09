import React, { useContext, useState } from 'react'
import { NavbarDrawerContext } from '../context/NavbarDrawerContext'
export const Navbar = () => {
    const { showNavMenu, setShowNavMenu } = useContext(NavbarDrawerContext)
    const handleClick = () => {
        if (showNavMenu) setShowNavMenu(false);
    }
    return (
        <div className='navbar' onMouseEnter={handleClick}><i onMouseEnter={() => setShowNavMenu(true)} className='bx bx-menu-alt-left bx-sm navIcon'></i><p>Happy Birthday Miss CUTE</p></div>
    )
}
