import React, { Component } from 'react';
import image from './img/happy-bunch.png';
import Header from './header/Header';
import './lab.css';
class Lab extends Component {
    
    render() { 
        return (
            <div>
                <div className="row">
                    <Header />
                    <div className="row ">
                        <div className="col s12 m12 l5 offset-l1 ">
                            <h3 >Search for a user and add report here!</h3>
                            <h4 >Hello World! We are here for you!!</h4>
                            <img src={image} className="responsive-img img1" />
                        </div>
                        <div className="col s12 m12 l2">
                            <div className="row white" id="lab_srch">
                                <div className="col ">
                                    <i className="material-icons prefix " id="lab_s_icon">search</i>
                                </div>  
                                <div className="col s10">
                                    <input type="text" placeholder="Search User here"  className=" white-text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Lab;