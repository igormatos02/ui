import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "monday-ui-style/dist/index.min.css";
import Navbar from "./Navbar";
import CheckboxExample from "./components/CheckboxExample";
import TabExample from "./components/TabExample";
import MenuButtonExample from "./components/MenuButtonExample";
import  ButtonExample  from "./components/ButtonExample";
import  PeakerExample  from "./components/PeakerExample";
import { Link } from 'react-router-dom';
import TopNavbar from './components/navigation/TopNavbar';
import SidebarMenu from './components/navigation/SidebarMenu';
import './App.css'; // Optional global CSS

import  Home  from "./modules/Home";
import  Personnel  from "./modules/personnel/Personnel";
import  Persons  from "./modules/personnel/Persons";
import  Reports  from "./modules/Reports/Reports";
import {FiUsers } from 'react-icons/fi';
import { MdOutlinePersonSearch } from "react-icons/md";
import { CiBank } from 'react-icons/ci';

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // useState must be inside the functional component

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };
  return (
    <Router>
      <div className="app-layout">
        <TopNavbar />
        <div className="main-layout">
          <SidebarMenu  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  />
          <div className={`content ${isSidebarOpen ? 'open' : 'closed'}`}>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Reports />} />
              <Route path="/settings/profile" element={<Reports />} />
              <Route path="/settings/preferences" element={<Reports />} />
              <Route path="/personnel" element={<Personnel />}>
                <Route path="persons" element={<Persons />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;