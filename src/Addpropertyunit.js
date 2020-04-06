import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
const Addpropertyunit=()=>{
return(
<div className="content-wrapper">
   <section className="content-header">
      <h1>
         Add  Properties  Unit
      </h1>
   </section>
   {/* Main content */}
   <section className="content">
      <div className="row">
         <div className="col-xs-12">
            <div className="box">
              
               <div className="col-xl-12">
                  <form className="form-horizontal">
                     <div className="box-body">
                        <div className="form-group">
                           <label htmlFor="inputEmail3" className="col-sm-2 control-label">Property</label>
                           <div className="col-sm-8">
                              <select className="form-control">
                                 <option>Tied to property</option>
                                 <option>Database</option>
                                 <option>Pull Address</option>
                                 {/* <option>Student Rental</option>
                                 <option>Storage Unit</option>
                                 <option>Commercial</option> */}
                              </select>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Rental Unit</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Rental Unit" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Tenant Name</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Tenant Name" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Bedrooms</label>
                           <div className="col-sm-8">
                              <input type="Number" className="form-control" id="inputPassword3" placeholder="Bedrooms" />
                           </div>
                           
                          
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Bathrooms</label>
                           <div className="col-sm-8">
                              <input type="Number" className="form-control" id="inputPassword3" placeholder="Bathrooms" />
                           </div>
                           
                          
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Type of Heat</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Type of Heat" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Furanance Filter Size</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>
                       
                        
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Fridge:  </label>
                           <div className="col-sm-8">
                              <label className="container1"><ins className="team-radio">Yes</ins>
                              <input type="radio" defaultChecked="checked" name="radio" />
                              <span className="checkmark" />
                              </label>
                              <label className="container1"><ins className="team-radio">No</ins>
                              <input type="radio" defaultChecked="checked" name="radio" />
                              <span className="checkmark" />
                              </label>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Stove</label>
                           <div className="col-sm-8">
                              <label className="container1"><ins className="team-radio">Yes</ins>
                              <input type="radio" defaultChecked="checked" name="radio" />
                              <span className="checkmark" />
                              </label>
                              <label className="container1"><ins className="team-radio">No</ins>
                              <input type="radio" defaultChecked="checked" name="radio" />
                              <span className="checkmark" />
                              </label>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Turnover PreInspection Date</label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>

                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Turnover Move Out Inspection Date </label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Turnover Cleaning Date</label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Turnover Repairs Date</label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Turnover Carpet Cleaning Date:</label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Turnover Painting Date</label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Furanance Filter Size" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Garage</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control" id="inputPassword3" placeholder="Garage" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Lockbox Location</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control" id="inputPassword3" placeholder="Lockbox Location:" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Lockbox Code</label>
                           <div className="col-sm-8">
                              <input type="text" className="form-control" id="inputPassword3" placeholder="Lockbox Code" />
                           </div>
                        </div>

                        <div className=""form-group>
                             <div className="col-xl-6 text-center d-block mx-auto">
                               <button className="btn-save">Save</button>
                               <button className="btn-save btn-cancel">Cancel</button>
                             </div>
                           </div>
                     </div>
                  </form>
               </div>
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
export default Addpropertyunit;