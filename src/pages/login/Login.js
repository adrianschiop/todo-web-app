import React from 'react';

import './style.css';
import logoIcon from '../../logo.svg';

export function Login() {
  return (
    <div className="Main-Content">
      <div className="Rectangle">
        <img src={logoIcon} alt="logo" className="Logo" title="Todo app" />
        <p className="Title">Welcome back!</p>
        <p className="Subtitle">Log in to continue</p>

        <input type="email" className="Email" placeholder="Email" />
        <input type="password" className="Password" placeholder="Password" />

        <a href="/signup">
          <p className="Access-option">Don't have an account? Sign up.</p>
        </a>

        <div className="Action-button-content">
          <button className="Action-label">Log In</button>
        </div>
      </div>
    </div>
  );
}