import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './doctorlist.css';
import image1 from './img/Mask Group 3.png';
import Header2 from './layouts/header2';
import Doctorcard from './doctor cards/doctorcard';
class Doctorlist extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(
        <div>
            <Header2 />
            <div className="row d_bkg"  >
            
                <div className="col s9 offset-s1 black-text " id="d_r1">
                    <div className="row">
                        <div className="col ">
                            <img src={image1} className="avatar" id="d_img" alt="" />
                        </div>
                        <div className="input-field col auto" id="d_srch">
                            
                            <i className="material-icons prefix blgs_srch_icon black-text">search</i>
                            <input type="text" placeholder="Search doctor here" id="autocomplete-input" className="autocomplete black-text" />
                        
                        </div>
                        
                    </div>
                </div>
            
            </div>
            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="col s12 m6 l3">
                        <Doctorcard />
                    </div>
                    <div className="col s12 m6 l3">
                        <Doctorcard />
                    </div>
                    <div className="col s12 m6 l3">
                        <Doctorcard />
                    </div>
                </div>
            </div>

        </div>
         
        
      );
  }
  
}

export default Doctorlist;  