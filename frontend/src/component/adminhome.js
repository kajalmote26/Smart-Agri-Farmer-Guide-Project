import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

 export default class AdminHome extends Component{
 
    render(){
        return(
          <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="logo">
          <Link to={"/dailyprice1"} className="navbar-brand">
          <h2>
            
            <span>A</span>dmin
            <span>P</span>anel
          </h2>
          </Link>
         </div>
         
         
        <div className="navbar-nav mr-auto">
<div className="navbaradmin">



            {/* <li className="nav-item">
              <button><Link to={"/users"} className="nav-link">
                Admin List
              </Link></button>
            </li>
            


            <li className="nav-item">
             <button><Link to={"/farmer_tbl"} className="nav-link">
                Farmer List
              </Link></button> 
            </li>

            <li className="nav-item">
              <button><Link to={"/driver_t"} className="nav-link">
                Driver List
              </Link></button>
            </li>

            <li className="nav-item">
              <button><Link to={"/shops"} className="nav-link">
                Shops List
              </Link></button>
            </li> */}

            <li className="nav-item">
              <button className="adminbtn"><Link to={"/dailyprice1"} className="nav-link">
                Daily Market List
              </Link></button>
            </li>
            
            
            <li className="nav-item">
              <button className="adminbtn"><Link to={"/cropdetail1"} className="nav-link">
               Add Crop Detail
              </Link></button>
            </li>
            
            <li className="nav-item">
              <button className="adminbtn"><Link to={"/diseaseslist1"} className="nav-link">
              Diseases
              </Link></button>
            </li>
            <li className="nav-item">
              <button className="adminbtn"><Link to={"/merchantlist"} className="nav-link">
              Add Merchant
              </Link></button>
            </li>

            <li className="nav-item">
              <button className="adminbtn"><Link to={"/shoplist"} className="nav-link">
              Shops
              </Link></button>
            </li>
            <li className="nav-item">
              <button className="adminbtn"><Link to={"/driverlist"} className="nav-link">
              Vehicles
              </Link></button>
            </li>

          </div>
          </div>


                </nav>

            </div>
            
        )
    }


}