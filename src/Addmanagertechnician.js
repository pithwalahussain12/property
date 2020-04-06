import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

const Addmanagertechnician=()=>{
    return(
      <div className="content-wrapper">
      <section className="content-header">
         <h1>
            Add  Maintenance Technician 
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
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">First name</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="First Name" />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Last Name</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="Last Name" />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Types of contract</label>
                              <div className="col-sm-8">
                                 <label className="container1"><ins className="team-radio">Employee</ins>
                                 <input type="radio" defaultChecked="checked" name="radio" />
                                 <span className="checkmark" />
                                 </label>
                                 <label className="container1"><ins className="team-radio">Contractor</ins>
                                 <input type="radio" defaultChecked="checked" name="radio" />
                                 <span className="checkmark" />
                                 </label>
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Status</label>
                              <div className="col-sm-8">
                                 <label className="container1"><ins className="team-radio">Part Time</ins>
                                 <input type="radio" defaultChecked="checked" name="radio" />
                                 <span className="checkmark" />
                                 </label>
                                 <label className="container1"><ins className="team-radio">Full Time</ins>
                                 <input type="radio" defaultChecked="checked" name="radio" />
                                 <span className="checkmark" />
                                 </label>
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Company Name</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="Company Name" />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Role</label>
                              <div className="col-sm-8">
                                 <select className="form-control">
                                   <option>Role 1</option>
                                   <option>Role 1</option>
                                   <option>Role 1</option>
                                   <option>Role 1</option>
                                   <option>Role 1</option>
                                 </select>
                          
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Work Phone</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="Work Phone" />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Email Address</label>
                              <div className="col-sm-8">
                                 <input type="Email" className="form-control" id="inputPassword3" placeholder="Email Address" />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Work Phone</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="Work Phone" />
                              </div>
                           </div>
                           <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Address</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Address" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label"></label>
                           <div className="col-sm-4">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="City" />
                           </div>
                          
                           <div className="col-sm-4">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Zipcode" />
                           </div>
                        </div>
                           {/* <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Teams</label>
                              <div className="col-sm-8">
                                                                  <div>
                                    <label className="container2"><ins className="team-radio">Teams 1</ins>
   
                                       <input type="checkbox" defaultChecked="checked" />
                                       <span className="checkmark1" />
                                    </label>
                                    <label className="container2"><ins className="team-radio">Teams 1</ins>
                                       <input type="checkbox" />
                                       <span className="checkmark1" />
                                    </label>
                                    <label className="container2"><ins className="team-radio">Teams 1</ins>
                                       <input type="checkbox" />
                                       <span className="checkmark1" />
                                    </label>
                                    </div>
   
                              </div>
                              
                           </div> */}
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Proof of Contractor Insurance</label>
                              <div className="col-sm-8">
                              <div className="file-upload">
                                <div className="image-upload-wrap">
                                  <input className="file-upload-input" type="file" onchange="readURL(this);" accept="image/*" />
                                  <div className="drag-text">
                                    <h3>Drag and drop a file or select add Image</h3>
                                  </div>
                                </div>
                                <div className="file-upload-content">
                                  <img className="file-upload-image" src="#" alt="your image" />
                                  <div className="image-title-wrap">
                                    <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                                  </div>
                                </div>
                              </div>


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

export default Addmanagertechnician;