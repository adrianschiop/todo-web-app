import React from 'react';

import './style.css';
import { PageWrapper } from '../components/PageWrapper';

export function Login() {
  return (
    <PageWrapper>
      <p className="Log-In-Title">Welcome back!</p>
      <p className="Log-In-Subtitle">Log in to continue</p>

      <input type="email" className="Log-In-Email" placeholder="Email" />
      <input type="password" className="Log-In-Password" placeholder="Password" />

      <a href="/signup">
        <p className="Sign-Up-Option">Don't have an account? Sign up.</p>
      </a>

      <div className="Log-In-Button-Content">
        <button className="Log-In-Label">Log In</button>
      </div>
    </PageWrapper>
  );
}