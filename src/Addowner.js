import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

const Addowner=()=>{
    return(
      <div className="content-wrapper">
      <section className="content-header">
         <h1>
            Add  property  Owner 
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
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Email Address</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="Email Address" />
                              </div>
                           </div>
                        
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Mobile Number</label>
                              <div className="col-sm-8">
                                 <input type="password" className="form-control" id="inputPassword3" placeholder="Mobile Number" />
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Referrer</label>
                              <div className="col-sm-8">
                                 <input type="Email" className="form-control" id="inputPassword3" placeholder="Referrer" />
                              </div>
                           </div>
                          
                           <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Number of Properties</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Number of Properties" />
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Number of Units</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Number of Units" />
                           </div>
                          
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputPassword3" className="col-sm-2 control-label">Monthly Rent Roll</label>
                           <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Monthly Rent Roll" />
                           </div>
                          
                        </div>
                         
                           <div className=""form-group>
                             <div className="col-xl-6 text-center d-block mx-auto">
                               <button className="btn-save">Save</button>
                            <Link to="/propertyowner">  <button className="btn-save btn-cancel">Cancel</button></Link> 
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

export default Addowner;