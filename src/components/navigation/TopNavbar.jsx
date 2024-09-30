// TopNavbar.jsx
import React from 'react';
import { FiSearch, FiBell, FiUser,FiCodesandbox  } from 'react-icons/fi';
import './styles/TopNavbar.css'; // Add custom styling if necessary

const TopNavbar = () => {
  return (
    <div className="top-navbar">
        <div className='inner-bar'>
      <div className="navbar-left">
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>  <FiCodesandbox   style={{ marginRight: '8px' }} />   <span>AMS 5.0</span></div>
       
      </div>
      <div className="navbar-right">
        <button className="navbar-action">
          <FiBell />
        </button>
        <div className="navbar-profile">
          <FiUser />
          <span>User Name</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopNavbar;
