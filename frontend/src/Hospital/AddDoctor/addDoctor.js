import React, { Component } from 'react';
import './addDoctor.css';
import image from '../AddDoctor/shiny-happy-people.png'
import { Link } from 'react-router-dom';
class AddDoctor extends Component{
    render(){
        return(
            <div >
                <div className="row" id="addDocrow">
                    <div className="col s12 m12 l4 offset-l2">
                        <img src={image} className="addDocimg" /> 
                    </div>
                    <div className="col s12 m12 l4">
                        <h4 className="center">Add Doctor here..</h4>
                        <p className="center">You will be adding doctor here...</p>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                <input  id="first_name" type="text" className="validate white-text" />
                                <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate white-text" />
                                <label for="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="field" type="text" className="validate white-text" />
                                    <label for="field">Field</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="qualification" type="text" className="validate white-text" />
                                    <label for="qualification">Qualification</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="email" type="email" className="validate white-text" />
                                <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="center"><Link to="/hosdash" className="btn addDocbtn">Submit</Link></div>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddDoctor;