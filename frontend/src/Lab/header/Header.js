import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './header.css';
import {Link } from 'react-router-dom';

class Header extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() { 
        return (
            <nav className="transparent">
                <div className="nav-wrapper">
                <a href="#" className="brand-logo center" id="lab_head">Laboratory</a>
                <ul id="nav-mobile" className="right ">
                    <li><Link to="/labprofile">Edit Profile</Link></li>
                    <li><Link to="/lab/login">Logout</Link></li>
                </ul>
                </div>
            </nav>
        );
    }
}
 
export default Header;