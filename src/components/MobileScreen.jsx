import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MobileScreen = () => {
    const navigate = useNavigate()
    return (
        <div className='mobile-screen'>
            <p>Do you have a PC/Laptop?</p>
            <div>
                <button onClick={() => navigate('/yes')}>Yes</button>
                <button onClick={() => navigate('/no')}>No</button>
            </div>
        </div>
    )
}
