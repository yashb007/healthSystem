import React, { Component } from 'react';
import image from './woman-3169726_1920.jpg';
import {Link} from 'react-router-dom';

class AddUserCard extends Component {
    
    render() { 
        return (
            <div className="card center" >
                <div className=" card-image ">
                    <img src={image} className="circle usercard_img" />
                </div>    
                <div className="card-content">
                    <h4 className="black-text">Anupam Das</h4>
                    <h5 className="grey-text">#12131424</h5>
                    
                    <form action="#">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" placeholder="Add new report here" type="text" />
                            </div>
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}
 
export default AddUserCard;