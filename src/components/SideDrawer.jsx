import React, { useContext } from 'react'
import { NavbarDrawerContext } from '../context/NavbarDrawerContext'

export const SideDrawer = () => {
    const { showNavMenu, setShowNavMenu, showHome, setShowHome } = useContext(NavbarDrawerContext)
    return (

        <div className={`sideDrawer ${showNavMenu ? 'show' : ''}`} >
            <div>
                <i onClick={() => setShowNavMenu(false)} className='bx bx-x bx-sm navIcon'></i>
            </div>
            <div className='sideDrawercontent'>
                {
                    showHome
                        ? <p onClick={() => { setShowHome(false); setShowNavMenu(false) }}>Message</p>
                        : <p onClick={() => { setShowHome(true); setShowNavMenu(false) }}>Home</p>
                }
            </div>
            <div>
                <p>Party kb de rhi ho &#129320;</p>
            </div>
        </div>
    )
}
