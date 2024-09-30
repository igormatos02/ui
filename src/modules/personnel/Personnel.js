// Home.js
import React from 'react';


import { MdOutlinePersonSearch } from "react-icons/md";
import { CiBank } from 'react-icons/ci';
import { Link,Outlet  } from 'react-router-dom';
const Personnel = () => {
  return (
    <div>
        <div className="top-menu-container">
            <Link to="persons" className="menu-item"><MdOutlinePersonSearch /> </Link>
            <Link to="/personnel/companies" className="menu-item"><CiBank /></Link>
         </div>
        <div className='scrollable-content'>
        <Outlet /> {/* This will render the nested route components */}
        </div>
     </div>
  )
};




export default Personnel;
