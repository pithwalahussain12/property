import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


const Propertyowner=()=>{
    return(
      <div className="content-wrapper">

  <section className="content-header">
    <h1>
    Property Owners
    </h1>
    <ol className="breadcrumb">
     
      
    <Link to="/Addowner" className="btn btn-primary">Add Property Owner</Link>
    </ol>
  </section>
  {/* Main content */}
  <section className="content">
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <div className="box-header">
            <h3 className="box-title"></h3>
          </div>
          {/* /.box-header */}
          <div className="box-body">
            <table id="example2" className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Number of  Property </th>
                  <th>Number of Unit</th>
                
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>john@gmail.com
                  </td>
                  <td>15</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                
               
               
              </tbody>
     
            </table>
          </div>
          {/* /.box-body */}
        </div>
        {/* /.box */}
       
        {/* /.box */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </section>
  {/* /.content */}
</div>
    )
}



export default Propertyowner;