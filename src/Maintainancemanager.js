import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


const Maintainancemanager=()=>{
    return(
      <div className="content-wrapper">

      <section className="content-header">
        <h1>
        Maintenance Manager
        </h1>
        <ol className="breadcrumb">
        
          <Link to="/Addmanager" className="btn btn-primary">Add Maintenance Manager</Link>
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
                      <th>Status </th>
                      <th>Property</th>
                      <th>Unit</th>
                      <th>Phone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                   
                   
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
                      <td><i class="fa fa-trash-o icon-1"> </i> 
                       <i class="fa fa-pencil icon-1 icon-2"> </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>	Current</td>
                      <td>TE218X - 218 10th Avenue Eau Claire, WI 54703</td>
                      <td>103</td>
                      <td>+1 59829882</td>
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



export default Maintainancemanager;