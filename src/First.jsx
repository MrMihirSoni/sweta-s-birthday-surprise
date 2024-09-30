import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Popup } from './components/Popup';

export const First = () => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const inputRef = useRef(null)

  const handleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEnter = () => {
    if (password === 'misscute') {
      navigate('/main');
    } else {
      setShowPopup(true);
      setPassword('');
      inputRef.current.focus();
      setTimeout(() => {
        setShowPopup(false); // Hide the popup after 2 seconds
      }, 2000);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="first">
      <p>Enter password</p>
      <div>
        <input
          type={passwordVisibility ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleChange}
          ref={inputRef}
        />
        {passwordVisibility ? (
          <i className="bx bxs-show" onClick={handleVisibility}></i>
        ) : (
          <i className="bx bxs-hide" onClick={handleVisibility}></i>
        )}
      </div>
      <button onClick={handleEnter}>Enter</button>
      <p className="hint">
        The password is 8 characters long and it's your name given by me, all small characters without spaces...
      </p>
      <Popup showPopup={showPopup} />
    </div>
  );
};
