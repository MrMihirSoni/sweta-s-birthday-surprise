import React, { useContext } from 'react'
import { NavbarDrawerContext } from '../context/NavbarDrawerContext'
import PHOTO from '../assets/PHOTO.jpeg'

export const Body = () => {
    const { setShowNavMenu, showHome } = useContext(NavbarDrawerContext)
    return (
        <div className={`body ${showHome ? "notShow" : ""}`} onMouseEnter={() => setShowNavMenu(false)}>
            <div className="card">
                <div className='right'>
                    <div className="imageDivWrapper">
                        <div className='imageDiv'>
                            <img src={PHOTO} alt="" />
                            <p>Congratulations...</p>
                        </div>
                    </div>
                </div>
                <div className='left'>
                    <div className='happyBirthday'>
                        <div className='shake'>
                            <p>Happy</p>
                            <p>Birthday</p>
                        </div>
                    </div>
                    <div className='bestWishes'>
                        <p>This birthday,<br />I wish you abundant happiness<br />and love.<br />May all your dreams turn into<br />reality and may lady luck visit<br />your home today.<br />Happy birthday to one of<br />the sweetest people<br />I’ve ever known.”</p>
                        <div className='div'>
                            <div className='div1'></div>
                            <div className='div2'></div>
                            <div className='div3'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
