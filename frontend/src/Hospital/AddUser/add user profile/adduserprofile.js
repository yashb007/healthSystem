import React, { Component } from 'react';
import './adduserprofile.css';
import image from './EcYTq93px20ptlPRSq1C.png';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class AddUserProfile extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    state = {
        name: null,
        state: null,
        district: null,
        Tehsil: null,
        address: null,
        contact: null,
        email: null,
        dob: null,
        aadhaar: null,
        url: null,
        image: {}
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    uploadPic = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("file", this.state.image)
        data.append("upload_preset", "healthSystem")
        data.append("cloud_name", "yashbansal")
        fetch("	https://api.cloudinary.com/v1_1/yashbansal/image/upload", {
            method: "POST",
            body: data
        }).then(res => res.json())
            .then(data => {
                console.log(data.url)
                this.setState({ url: data.url })

                console.log(this.state);
                console.log("123")
                Axios.post('http://localhost:8080/user/register', this.state)
                    .then((res) => {
                            console.log("1234")
                            this.props.history.push("/hosdash");
                    }).catch((err) => {
                        console.log(err, 45);
                    }).catch(err => console.log(err))
            })
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
                        <form className="col s12" id="addUp_form" onSubmit={this.uploadPic}>
                        <fieldset>
                            <div className="row">
                                        <input type="file" id="form-message" className="form-input white-text"
                                            onChange={(e) => {
                                                console.log(e.target.files[0])
                                                this.state.image = e.target.files[0]
                                                console.log(this.state.image)
                                            }
                                            } placeholder="Click to upload" />
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="name" type="text" className="validate white-text " onChange={this.changeHandle} />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="dob" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="dob">DOB</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="aadhaar" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="adhaar">Adhaar Number</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="state" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="state">State</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="district" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="district">District</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Tehsil" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="Tehsil">Tehsil</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="address" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="address">Address</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="contact" type="text" onChange={this.changeHandle} className="validate white-text " />
                                    <label htmlFor="contact">Contact Number</label>
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

export default AddUserProfile;
