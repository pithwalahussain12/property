import React, {Component} from 'react'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Main from './Main'
import { BrowserRouter, Route,} from 'react-router-dom'
import Properties from './Properties'
import Teamates from './Teamates'
import Addproperty from './Addproperty'
import Addteamates from './Addteamates'
import Propertyunit from './Propertyunit'
import Propertyowner from './Propertyowner'
import Maintainance from './Maintainance'
import Maintainancemanager from './Maintainancemanager'
import Addmanager from './Addmanager'
import Addmanagertechnician from './Addmanagertechnician'
import Addpropertyunit from './Addpropertyunit'
import Addowner from './Addowner'



class App extends Component {
    
    render (){
        return (
        
          
            <BrowserRouter>
            <Header/>
            <Menu/>
            <Route exact path="/" component={Main}/>
            <Route path="/Properties" component={Properties}/>
            <Route path="/Teamates" component={Teamates}/>
           
            <Route path="/Propertyunit" component={Propertyunit}/>
            <Route path="/Propertyowner" component={Propertyowner}/>
            <Route path="/Maintainance" component={Maintainance}/>
            <Route path="/Maintainancemanager" component={Maintainancemanager}/>
            <Route path="/Addproperty" component={Addproperty}/>
            <Route path="/Addteamates" component={Addteamates}/>
            <Route path="/Addmanager" component={Addmanager}/>
            <Route path="/Addmanagertechnician" component={Addmanagertechnician}/>
            <Route path="/Addpropertyunit" component={Addpropertyunit}/>
            <Route path="/Addowner" component={Addowner}/>
            
            <Footer/>
            </BrowserRouter>
    
        
      
     
        )
    }
}

export default App;
