import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './doctorcard.css';
import image1 from './img/nature-2608599_1920.jpg';
import image2 from  './img/woman-3169726_1920.jpg';

class Doctorcard extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(

                <div className="card" id="team_teamseccards">
                  <div className="card-image">
                    <img src={image1} className="team_teamsec_bkg" />
                    
                  </div>
                  <div className="card-content center team_teamctnt">
                      <img src={image2} className="team_teamsec_avtr circle responsive-img" alt="" />
                      <h3 className="team_teamsechd">Jessie </h3>
                      <h6 className="grey-text">Surgeon</h6>
                  </div>
                  
                  
                </div>
                
         
        
      );
  }
  
}

export default Doctorcard;  