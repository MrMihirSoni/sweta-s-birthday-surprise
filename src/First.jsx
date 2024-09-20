import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const First = () => {
  const navigate = useNavigate()
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [password, setPassword] = useState("")
  const handleVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEnter = () => {
    if (password === "misscute") navigate('/main');
    else {
      alert("wrong password")
      setPassword("")
    };

  }
  return (
    <div className='first'>
      <p>Enter password</p>
      <div>
        <input type={passwordVisibility ? "text" : "password"} name="password" value={password} onChange={handleChange} />
        {
          passwordVisibility
            ?
            <i className='bx bxs-show' onClick={handleVisibility}></i>
            :
            <i className='bx bxs-hide' onClick={handleVisibility} ></i>
        }
      </div>
      <button onClick={handleEnter}>Enter</button>
      <p className='hint'>The password is 8 charector long and its your name given by me, all small charectors without spaces...</p>
    </div>
  )
}
