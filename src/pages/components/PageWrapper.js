import React from 'react';

import './style.css';
import logoIcon from '../../logo.svg';

// @Feedback: This folder is name components, but also the other folders have components. Should it be named `page` or similar.
export function PageWrapper({ children }) {
  return (
    <div className="Main-Content">
      <div className="Rectangle">
        <img src={logoIcon} alt="logo" className="Logo" title="Todo app" />

        {children}
      </div>
    </div>
  );
}