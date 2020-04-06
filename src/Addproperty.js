import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
const Addproperty=()=>{
return(
<div className="content-wrapper">
   <section className="content-header">
      <h1>
         Add  Properties 
      </h1>
   </section>
   {/* Main content */}
   <section className="content">
      <div className="row">
         <div className="col-xs-12">
            <div className="box">
               <div className="box-header box1">
                  <h3 className="box-title">Property Name And Address</h3>
               </div>
               <div className="col-xl-12">
                  <form className="form-horizontal">
                     <div className="box-body">
                        <div className="form-group">
                           <label htmlFor="inputEmail3" className="col-sm-2 control-label">Property Type</label>
                           <div className="col-sm-8">
                              <select className="form-control">
                                 <option>Single Family</option>
                                 <option>Mixed Use</option>
                                 <option>Multi Family</option>
                                 <option>Student Rental</option>
                                 <option>Storage Unit</option>
                                 <option>Commercial</option>
                              </select>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Address</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Address 1" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label"></label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Address 2" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label"></label>
                           <div className="col-sm-3">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="City" />
                           </div>
                           <div className="col-sm-3">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="State" />
                           </div>
                           <div className="col-sm-2">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Zipcode" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Custom General Field</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Custom General Field1" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Internet Password</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Internet Password" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Key Code</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Key Code" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Lock Box Location</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Lock Box Location" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Lock Box Code:</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Lock Box Code:" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Lawn Care Option</label>
                           <div className="col-sm-8">
                              <label className="container1"><ins className="team-radio">Tenant Responsible</ins>
                              <input type="radio" defaultChecked="checked" name="radio" />
                              <span className="checkmark" />
                              </label>
                              <label className="container1"><ins className="team-radio">Tenant Responsible</ins>
                              <input type="radio" defaultChecked="checked" name="radio" />
                              <span className="checkmark" />
                              </label>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Snow Removal</label>
                           <div className="col-sm-8">
                                 <div>
                        <label className="radio"><ins className="team-radio">Tenant Responsible</ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        <label className="radio"><ins className="team-radio">Tenant Responsible</ins>
                           <input type="radio" name="is_company" />
                           <span className="checkround" />
                        </label>
                        </div>

                           </div>
                           
                           
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Locking Privacy Entry:</label>
                           <div className="col-sm-8">
                                 <div>
                        <label className="radio"><ins className="team-radio">Yes</ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        <label className="radio"><ins className="team-radio">No </ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        </div>

                           </div>
                           
                           
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Windows</label>
                           <div className="col-sm-8">
                                                               <div>
                                 <label className="container2"><ins className="team-radio">Wood</ins>

                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark1" />
                                 </label>
                                 <label className="container2"><ins className="team-radio">Vinyl</ins>
                                    <input type="checkbox" />
                                    <span className="checkmark1" />
                                 </label>
                                 <label className="container2"><ins className="team-radio">Metal</ins>
                                    <input type="checkbox" />
                                    <span className="checkmark1" />
                                 </label>
                                 </div>

                           </div>
                           
                        </div>

                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Siding Type</label>
                           <div className="col-sm-8">
                                                               <div>
                                 <label className="container2"><ins className="team-radio">Wood</ins>

                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark1" />
                                 </label>
                                 <label className="container2"><ins className="team-radio">Vinyl</ins>
                                    <input type="checkbox" />
                                    <span className="checkmark1" />
                                 </label>
                                 <label className="container2"><ins className="team-radio">Metal</ins>
                                    <input type="checkbox" />
                                    <span className="checkmark1" />
                                 </label>
                                 </div>

                           </div>
                           
                           
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Locking Privacy Entry:</label>
                           <div className="col-sm-8">
                                 <div>
                        <label className="radio"><ins className="team-radio">Yes</ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        <label className="radio"><ins className="team-radio">No </ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        </div>

                           </div>
                           
                           
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Alaram Syste</label>
                           <div className="col-sm-8">
                                 <div>
                        <label className="radio"><ins className="team-radio">Yes</ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        <label className="radio"><ins className="team-radio">No </ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        </div>

                           </div>
                           
                           
                        </div>

                     <div className="form-group">
                     <label htmlFor="inputPassword3" className="col-sm-2 control-label">Common Area Cleaning Schedule</label>


                           <div className="col-sm-8">
                           <select className="form-control">
                            <option>
                            Weekly
                            </option>
                            <option>
                            BiWeekly
                            </option>
                            <option>
                            Montly
                            </option>
                            <option>
                            Quarterly
                            </option>
                         </select>
                                
                                 </div>

                           </div>
                           <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Last Exterior Inspection</label>
                           <div className="col-sm-8">
                              <input type="date" className="form-control" id="inputPassword3" placeholder="Lock Box Location" />
                           </div>
                        </div>
                           
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Locking Privacy Entry:</label>
                           <div className="col-sm-8">
                                 <div>
                        <label className="radio"><ins className="team-radio">Yes</ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        <label className="radio"><ins className="team-radio">No </ins>
                           <input type="radio" defaultChecked="checked" name="is_company" />
                           <span className="checkround" />
                        </label>
                        </div>

                           </div>
                           
                           
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Locking Privacy Entry:</label>
                           <div className="col-sm-8">
                        
                               <input type="text" className="form-control" placeholder="Custom Maintenance Field"/>
                           </div>
                           
                           
                        </div>

                     <div className=""form-group>
                             <div className="col-xl-6 text-center d-block mx-auto">
                               <button className="btn-save">Save</button>
                               <button className="btn-save btn-cancel">Cancel</button>
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
export default Addproperty;