import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AuthenticationService from '../../services/AuthenticationService';


function HeaderComponent() {
  // console.log('999999999999999');
  const loggedIn = AuthenticationService.isUserLoggedIn();

  return (
    <div className='navbar1'>
      {console.log('loggedIn', loggedIn)}
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='logo11'>

<Link to={"/dailyprice"} className="navbar-brand">
  <h2>
    {/* <span>S</span>mart
    <span>A</span>griculture */}

  </h2>
</Link>
</div>
          <ul className='navbar-nav'>
            <li>
            <Link to={"/"} className='nav-link'>Home</Link>
            </li>
          
            {/* <li>
              {loggedIn && (
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              )}
            </li> */}
            {/* <li>
              {loggedIn && (
                <Link className='nav-link' to='/'>
                  Plantation
                </Link>
              )}
            </li> */}

            <li>
              {loggedIn && (
                <Link className='nav-link' to='/cropdetail'>
                  Crop Detail
                </Link>
              )}
            </li>
            <li>
              {loggedIn && (
                <Link className='nav-link' to='/diseaselistbycrop'>
                  Diseases
                </Link>
              )}
            </li>
            <li>
              {loggedIn && (
                <Link className='nav-link' to='/merchantlistbycity'>
                  Sales&Trasporation
                </Link>
              )}
            </li>
            <li>
            <Link to={"/contact"} className='nav-link'>Contact</Link>
            </li>
            <li>
            <Link to={"/aboutus"} className='nav-link'>About Us</Link>
            </li>

          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>

          <li>
              {!loggedIn && (
                <Link className='nav-link' to='/userreg'>
                  Register
                </Link>
              )}
            </li>
            <li>
              {!loggedIn && (
                <Link className='nav-link' to='/login'>
                 Login
                </Link>
              )}
            </li>
            

            

            <li>
              {!loggedIn && (
                <Link className='nav-link' to='/adminlogin'>
                  Admin
                </Link>
              )}
            </li>


            {/* <li>
              {loggedIn && (
                <Link className='nav-link' to='/'>
                <ul className='navbar-nav navbar-collapse justify-content-end'>
                    <select>
                      <option>Shop</option>
                      <option>Driver</option>
                    </select>
                  </ul> 
                </Link>
              )}
            </li> */}
            <li>
              {loggedIn && (
                <Link
                  className='nav-link'
                  to='/logout'
                  onClick={AuthenticationService.removeUserDetails}
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default withRouter(HeaderComponent);
