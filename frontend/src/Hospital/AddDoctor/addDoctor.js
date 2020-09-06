import React, { Component } from 'react';
import './addDoctor.css';
import image from '../AddDoctor/shiny-happy-people.png'
import { Link } from 'react-router-dom';
import Axios from 'axios';
class AddDoctor extends Component{
   
    state = {
        firstname : null,
        lastname: null ,
        email : null,
        contact : null ,
        field : null , 
        qualification : null , 
      }
    
      changeHandle=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
    
      submitHandle=(e)=>{
        e.preventDefault();
        console.log(this.state);
        Axios.post('http://localhost:8080/hsp/addDoctor',this.state)
            .then((res)=>{
                console.log(res)
                if(res.data.added){
                    this.props.history.push("/hosdash"); 
                }
              else
                {
                alert("not added")
            }                
            }).catch((err)=>{
              console.log(err);
            })
      }


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
                        <form className="col s12" onSubmit={this.submitHandle}>
                        <fieldset>                            <div className="row">
                                <div className="input-field col s6">
                                <input  id="firstname" onChange={this.changeHandle} type="text" className="validate white-text" />
                                <label for="firstname">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                <input id="lastname" onChange={this.changeHandle} type="text" className="validate white-text" />
                                <label for="lastname">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="field" onChange={this.changeHandle} type="text" className="validate white-text" />
                                    <label for="field">Field</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="qualification" onChange={this.changeHandle} type="text" className="validate white-text" />
                                    <label for="qualification">Qualification</label>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="email" onChange={this.changeHandle} type="email" className="validate white-text" />
                                <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12">
                            <input id="contact" onChange={this.changeHandle} type="text" className="validate white-text" />
                            <label for="contact">Contact</label>
                            </div>
                        </div>
                            <div className="center ">  <button className="btn addDocbtn">Submit</button> </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddDoctor;