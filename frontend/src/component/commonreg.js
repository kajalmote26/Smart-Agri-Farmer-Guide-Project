import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Farmreg from './users';
  
const Commonreg = () => {
  return (
    <div className='navbar-nav'>
       <span><h2>Registration</h2></span>    
     <nav className="navbar">
    
            <li className='nav-item'>
              <b>Farmer Registration</b>
            <button className='F'>
        <Link to={"farmreg"} className='nav-link'>Farmer Registration</Link>
        </button>
            </li>
       <li className='nav-item'>
        <b>Driver Registration</b>
       <button className='F1'>
        <Link to={"driverreg"} className='nav-link'>Driver Registration</Link>
        </button>
       </li>
       <li className='nav-item'>
       <b>Shop Registration</b> 
       <button className='F2'>
        <Link to={"sreg"} className='nav-link'>Shop Registration</Link>
        </button>
       </li>
        </nav>
        <div className='navbar-nav'>
          <span><h2>Login</h2></span>
          <nav className='navbar'>
          <li className='nav-item'>
          <b>Farmer Login</b>
            <button className='F'>
        <Link to={"farmerlogin"} className='nav-link'>Farmer Login</Link>
        </button>
            </li>
            <li className='nav-item'>
            <b>Driver Login</b>
            <button className='F1'>
        <Link to={"driverlogin"} className='nav-link'>Driver Login</Link>
        </button>
            </li>
            <li className='nav-item'>
            <b>Shop Login</b> 
            <button className='F2'>
        <Link to={"shoplogin"} className='nav-link'>Shop Login</Link>
        </button>
            </li>            
          </nav>

        </div>     
       
    </div>
  );
};
  
export default Commonreg;