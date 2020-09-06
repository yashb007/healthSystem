import React, { Component } from 'react';
import image from './img/happy-bunch.png';
import image2 from './img/happy-bunch (2).png';
import Header from './header/Header';
import './lab.css';
import AddUserCard from './addUserCard';
class Lab extends Component {
    
    render() { 
        return (
            <div>
                <div className="row">
                    <Header />
                    <div className="row ">
                            <h3 className="center" >Search for a user and add report here!</h3>
                            <h4 className="center">Hello World! We are here for you!! &nbsp;<i class="far fa-hand-point-down"></i></h4>
                        
                        <div className="col s12 m12 l4  offset-l1">                            
                            <img src={image} className="responsive-img img1" />
                        </div>
                        <div className="col s10 m10 offset-s1 offset-m1 l3">
                            <div className="row white" id="lab_srch">
                                <div className="col ">
                                    <i className="material-icons prefix " id="lab_s_icon">search</i>
                                </div>  
                                <div className="col s10">
                                    <input type="text" placeholder="Search User here"  className=" white-text" />
                                </div>
                            </div>
                            
                            
                        </div>
                        
                        <div className="hide-on-med-and-down" id="lab_img2">
                            < img src={image2} className="responsive-img lab_im2" /> 
                        </div> 
                        
                    </div>
                    
                    
                </div>

                <div className="row">
                    <div className="col l10 offset-l1">
                        <div className="divider"></div><br />
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Lab;