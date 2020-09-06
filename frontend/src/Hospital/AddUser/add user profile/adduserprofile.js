import React,{Component} from 'react';
import './adduserprofile.css';
import image from './EcYTq93px20ptlPRSq1C.png';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import {Link} from 'react-router-dom';

class AddUserProfile extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() { 
        return (
            <div>
                <div className="row" id="addUp">
                    <div className="col s12 m12 l4 offset-l2">
                        <img src={image} className="addUp_img white-text" /> 
                    </div>
                    <div className="col s12 m12 l4">
                        <h4 className="center">Add new user profile here..</h4>
                        <p className="center">You will be adding a new here...</p>
                        <form className="col s12" id="addUp_form">
                            <div className="row">
                                <div className="file-field input-field prescp">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="Upload Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                <input  id="name" type="text" className="validate white-text " />
                                <label for="name">Name</label>
                                </div>
                            </div>    
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                <input id="name_of_patient" type="text" className="validate white-text " />
                                <label for="name_of_patient">DOB</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="adhaar" type="text" className="validate white-text " />
                                    <label for="adhaar">Adhaar Number</label>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="state" type="text" className="validate white-text " />
                                    <label for="state">State</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="medicine_name" type="text" className="validate white-text " />
                                    <label for="medicine_name">District</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="strengthofmed" type="text" className="validate white-text " />
                                    <label for="strengthofmed">Tehsil</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Doseofmeditation" type="text" className="validate white-text " />
                                    <label for="Doseofmeditation">Address</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="cnum" type="text" className="validate white-text " />
                                    <label for="cnum">Contact Number</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="otp" type="text" className="validate white-text " />
                                    <label for="otp">OTP</label>
                                </div>
                            </div>
                            
                            
                            <div className="center"><Link to="/hosdash" className="btn ">Submit</Link></div>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddUserProfile;
