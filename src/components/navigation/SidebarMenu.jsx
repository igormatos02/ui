// SidebarMenu.jsx
import React, { useState } from 'react';
import { FiHome, FiSettings, FiChevronDown, FiGrid, FiFileText, FiUsers, FiArrowLeft, FiCpu, FiShare2, FiDatabase } from 'react-icons/fi';
import { GrUserPolice } from 'react-icons/gr';
import { BsPersonVcard } from 'react-icons/bs';
import { PiProjectorScreenChart   } from 'react-icons/pi';
import { MdOutlineSpaceDashboard    } from 'react-icons/md';

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
          <MdOutlineSpaceDashboard />
          {isSidebarOpen && <span> Dashboard</span>}
        </Link>

        <Link to="/personnel" className="menu-item">
          <FiUsers />
          {isSidebarOpen && <span> Personnel Data</span>}
        </Link>

        <Link to="/projects" className="menu-item">
          <BsPersonVcard />
          {isSidebarOpen && <span> Visitors</span>}
        </Link>
        <Link to="/projects" className="menu-item">
          <GrUserPolice />
          {isSidebarOpen && <span> Guard Tours</span>}
        </Link>

        <Link to="/projects" className="menu-item">
          <FiDatabase />
          {isSidebarOpen && <span> System Data</span>}
        </Link>
        
        <Link to="/projects" className="menu-item">
          <PiProjectorScreenChart  />
          {isSidebarOpen && <span> Reports</span>}
        </Link>


        <div className="menu-item" onClick={toggleSubMenu}>
          <FiSettings />
          {isSidebarOpen && <span> Settings</span>}
          <FiChevronDown className={`chevron ${isSubMenuOpen ? 'open' : ''}`} />
        </div>

        {isSubMenuOpen && (
          <div className="submenu">
            <Link to="/settings/profile" className="submenu-item">
              <FiCpu />
              {isSidebarOpen && <span> System Configuration</span>}
            </Link>
            <Link to="/settings/preferences" className="submenu-item">
              <FiShare2 />
              {isSidebarOpen && <span> MUM</span>}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;
