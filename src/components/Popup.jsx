import React from 'react';

export const Popup = ({ showPopup }) => {
  return (
    <div className={`popup ${showPopup ? 'show' : 'hide'}`}>
      Wrong Password!!
    </div>
  );
};
