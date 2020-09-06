import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './hosprofile.css';
import {Link}  from 'react-router-dom';

class Hosform extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(
        
            <div className="container ">
                <span className="center"><h3><i className="fas fa-graduation-cap"></i>Edit your profile here...</h3></span>
                <span className="center"><h5><i className="fas fa-code-branch"></i>  You can edit here any field you want <br /><br />  </h5></span>
                

                <form action="hosdash">
                <div className="input-field" >
                    <input placeholder="Name"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="State"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="District"  type="text" className="  white-text " />
                </div>
                <div className="input-field">
                    <input placeholder="Tehsil"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Address"  type="text" className="  white-text" />
                </div>
                <div className="input-field white" >
                    <select >
                    <option value="" disabled selected id="selecttype"> &nbsp;Type</option>
                    <option value="1">Private</option>
                    <option value="2">Government</option>
                    <option value="3">Semi-Government</option>
                    </select>
                    
                </div>
                
                <div className="input-field">
                    <input placeholder="Total Beds Count"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Occupied Beds Count"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Total Ventillators Count"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Occupied Ventillators Count"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Head"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Lab"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder="Contact"  type="text" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder=" Email"  type="email" className="  white-text" />
                </div>
                <div className="input-field">
                    <input placeholder=" Password"  type="password" className="  white-text" />
                </div>       
                <div className="file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" placeholder="Upload your hospital image here" type="text" />
                    </div>
                </div>
                <div className="center">
                    <Link to="hosdash" className="btn" id="edu_button">SUBMIT</Link>
                </div>
    
                </form>
    
          </div>
        
         
        
      );
  }
  
}

export default Hosform;  