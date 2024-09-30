// SidebarMenu.jsx
import React, { useState } from 'react';
import { FiHome, FiSettings, FiChevronDown, FiGrid, FiFileText, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles/SidebarMenu.css'; 

const SidebarMenu = ({ isSidebarOpen, toggleSidebar }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };



  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? <FiArrowLeft /> : <FiArrowLeft style={{ transform: 'rotate(180deg)' }} />}
      </button>
      <div className="sidebar-menu">
        <Link to="/" className="menu-item">
          <FiHome />
          {isSidebarOpen && <span>Dashboard</span>}
        </Link>
        <Link to="/projects" className="menu-item">
          <FiGrid />
          {isSidebarOpen && <span>Projects</span>}
        </Link>
        <div className="menu-item" onClick={toggleSubMenu}>
          <FiSettings />
          {isSidebarOpen && <span>Settings</span>}
          <FiChevronDown className={`chevron ${isSubMenuOpen ? 'open' : ''}`} />
        </div>

        {isSubMenuOpen && (
          <div className="submenu">
            <Link to="/settings/profile" className="submenu-item">
              <FiUser />
              {isSidebarOpen && <span>Profile</span>}
            </Link>
            <Link to="/settings/preferences" className="submenu-item">
              <FiFileText />
              {isSidebarOpen && <span>Preferences</span>}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;
