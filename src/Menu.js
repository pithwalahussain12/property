import React, {Component} from 'react'
import {Link} from 'react-router-dom'


function Menu() {
  return(
    <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
     
      {/* search form */}
      {/* <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form> */}
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        {/* <li className="header">MAIN NAVIGATION</li> */}
        <li className="active treeview menu-open">
          <Link to="/">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
           
          </Link>
          {/* <ul className="treeview-menu">
            <li><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
            <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
          </ul> */}
        </li>
         <li className="treeview" >
          
    
           <a href="">
            <i className="fa fa-users" />
            <span>Teammates</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
            </a>
               <ul className="treeview-menu">
          
            <li><Link to="/Teamates"><i className="fa fa-circle-o" /> President</Link></li>
            <li><Link to="/Maintainancemanager"><i className="fa fa-circle-o" /> Maintenance Manager</Link></li>
            <li><Link to="/Maintainance"><i className="fa fa-circle-o" /> Maintenance Technician</Link></li>
            
          </ul>
        </li>
        
        <li className="treeview" >
    
           <a href="">
            <i className="fa fa-files-o" />
            <span>Properties</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
            </a>
               <ul className="treeview-menu">
            {/* <li><Link to="/Tenants"><i className="fa fa-circle-o" />Tenants</Link></li> */}
            <li> <Link to="./properties"><i className="fa fa-circle-o" />  Properties List </Link></li>
            <li><Link to="./propertyowner"><i className="fa fa-circle-o" /> Property Owner</Link></li>
            <li><Link to="./propertyunit"><i className="fa fa-circle-o" /> Property Unit</Link></li>
            
          </ul>
        </li>
        {/* <li>
          <Link to="./properties">
            <i className="fa fa-th" /> <span>Properties</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span> 
          </Link>
        </li> */}
        <li className="treeview">
          <a href="fake_url">
            <i className="fa fa-pie-chart" />
            <span>Reports</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o" /> Mileage</a></li>
            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o" /> Materials</a></li>
            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o" /> Labor</a></li>
            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" />Custom Reports</a></li>
            {/* <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" />G.L Entries</a></li> */}
            {/* <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" />Diagonistics</a></li> */}
          </ul>
        </li>
        
        
       
       
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
</div>

        )
}

export default Menu;