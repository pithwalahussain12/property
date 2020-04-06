import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


const Properties=()=>{
    return(
      <div className="content-wrapper">

  <section className="content-header">
    <h1>
     Properties List
    </h1>
    <ol className="breadcrumb">
     
      
    <Link to="/Addproperty" className="btn btn-primary">Add Property</Link>
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
                  <th>Property Group </th>
                  <th>Rental Unit</th>
                  <th>Owners Detail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trident</td>
                  <td>Internet
                    Explorer 4.0
                  </td>
                  <td>Win 95+</td>
                  <td> 4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>Internet
                    Explorer 5.0
                  </td>
                  <td>Win 95+</td>
                  <td>5</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>Internet
                    Explorer 5.5
                  </td>
                  <td>Win 95+</td>
                  <td>5.5</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>Internet
                    Explorer 6
                  </td>
                  <td>Win 98+</td>
                  <td>6</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>Internet Explorer 7</td>
                  <td>Win XP SP2+</td>
                  <td>7</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Trident</td>
                  <td>AOL browser (AOL desktop)</td>
                  <td>Win XP</td>
                  <td>6</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Firefox 1.0</td>
                  <td>Win 98+ / OSX.2+</td>
                  <td>1.7</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Firefox 1.5</td>
                  <td>Win 98+ / OSX.2+</td>
                  <td>1.8</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Firefox 2.0</td>
                  <td>Win 98+ / OSX.2+</td>
                  <td>1.8</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Firefox 3.0</td>
                  <td>Win 2k+ / OSX.3+</td>
                  <td>1.9</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Camino 1.0</td>
                  <td>OSX.2+</td>
                  <td>1.8</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Camino 1.5</td>
                  <td>OSX.3+</td>
                  <td>1.8</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Netscape 7.2</td>
                  <td>Win 95+ / Mac OS 8.6-9.2</td>
                  <td>1.7</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Netscape Browser 8</td>
                  <td>Win 98SE+</td>
                  <td>1.7</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Netscape Navigator 9</td>
                  <td>Win 98+ / OSX.2+</td>
                  <td>1.8</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Mozilla 1.0</td>
                  <td>Win 95+ / OSX.1+</td>
                  <td>1</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Mozilla 1.1</td>
                  <td>Win 95+ / OSX.1+</td>
                  <td>1.1</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Mozilla 1.2</td>
                  <td>Win 95+ / OSX.1+</td>
                  <td>1.2</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Mozilla 1.3</td>
                  <td>Win 95+ / OSX.1+</td>
                  <td>1.3</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Mozilla 1.4</td>
                  <td>Win 95+ / OSX.1+</td>
                  <td>1.4</td>
                  <td><i class="fa fa-trash-o icon-1"> </i> 
                   <i class="fa fa-pencil icon-1 icon-2"> </i>
                  </td>
                </tr>
                <tr>
                  <td>Gecko</td>
                  <td>Mozilla 1.5</td>
                  <td>Win 95+ / OSX.1+</td>
                  <td>1.5</td>
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



export default Properties;