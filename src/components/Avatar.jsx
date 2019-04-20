import React from 'react';
import logo from './../images/logo.gif';
import logoimg from './../images/logo.png'

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img 
      src={(props.modifierClasses === 'c-avatar--as-author') ? logoimg : logo} 
      alt="futurefox.com"
    />
  </div>
)

export default Avatar;