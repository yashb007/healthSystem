import React,{ Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import { Link } from 'react-router-dom';
import image1 from '../img/clinic-2921858_1920.jpg';
import './nav.css';



class Header extends Component {

    state={
        info:null
    }
    componentDidMount(){
        M.AutoInit();
        const data=localStorage.getItem('user');
        const td=JSON.parse(data);
        console.log(td);
        this.setState({
            info:td
        })
    }
    render(){
        return (<nav key="fwefwe" className="log_nav " >
            <div className="navbar-fixed">
                <div className="nav-wrapper ">
                    <Link to="#!" className="brand-logo center " id="navh">Hospital</Link>
                    <ul id="nav-mobile " className="right" >
                        <li><Link to="#" data-target="slide-out"  className=" sidenav-trigger show-on-large  right"><i className="material-icons">menu</i></Link></li>
                    </ul>
                    
                </div>
            </div>

            
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={image1} className="responsive-img center" alt="dw" />
                        </div>
                        <Link to="#!user"><img className="circle " src={this.state.info ? this.state.info.url : null} /></Link>
                        <Link to="#!name"><span className="white-text name">{this.state.info ? this.state.info.name:null}</span></Link>
                        <Link to="#!email"><span className="white-text email">{this.state.info ? this.state.info.email : null}</span></Link>
                    </div>               
                </li>
                <li><Link to="doclist" className="waves-effect" ><i className="fas fa-clipboard-list"></i>Doctor's List</Link></li>
                <li><div className="divider "></div></li>
                <li><Link className="waves-effect" to="hosprofile"><i className="material-icons">create</i>Edit Profile</Link></li>
                <li><div className="divider "></div></li>
                <li><Link to="#" className="header">Account Controls</Link></li>            
                <li><Link className="waves-effect" to="index"><i className="material-icons">arrow_back</i>Logout</Link></li>
                <li><div className="divider "></div></li>
            </ul>
      </nav>) 
    }
}

export default Header;