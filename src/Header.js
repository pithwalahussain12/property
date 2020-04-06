import React, {Component} from 'react'

import {Link} from 'react-router-dom'





class  Header extends Component{
  
    render () {
        return(

         
<div>
  
  <header className="main-header">
    {/* Logo */}
    <Link to="/" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini"><b>A</b>LT</span>
      {/* logo for regular state and mobile devices */}
      {/* <span className="logo-lg"><b>Admin</b>LTE</span>
      <img src="dist/img/prosperlogo.png"> */}
      <img src="dist/img/prosperlogo.png" className="img-custom" alt="User" />

    </Link>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {/* Navbar Right Menu */}
      <div className="navbar-custom-menu">
      
        <ul className="nav navbar-nav">
       
         <li>
           <div className="input-custom">
         <input type="text" className="img-cost" placeholder="Search"/>
      </div>
         </li>
          {/* User Account: style can be found in dropdown.less */}
          <li className="dropdown user user-menu">
            <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
              {/* User image */}
              <li className="user-header">
                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              {/* Menu Body */}
             
              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="fake_url" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <Link to="/login" className="btn btn-default btn-flat">Sign out</Link>
                </div>
              </li>
            </ul>
          </li>
          {/* Control Sidebar Toggle Button */}
       
        </ul>
      </div>
    </nav>
  </header>
</div>


        )
    }
}

export default Header;