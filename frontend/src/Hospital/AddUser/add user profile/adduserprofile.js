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
        Contact: null,
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
                        if (res.data.validation.errors.length > 0) {
                            console.log(res.data.validation.errors, 67)
                            alert(`err : ${res.data.validation.errors[0].msg}`);
                        } else {
                            console.log("1234")
                            this.props.history.push("/hospital/login");
                        }
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
                                    <input id="name_of_patient" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="name_of_patient">DOB</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="adhaar" onChange={this.changeHandle} type="text" className="validate white-text " />
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
                                    <input id="medicine_name" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="medicine_name">District</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="strengthofmed" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="strengthofmed">Tehsil</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Doseofmeditation" onChange={this.changeHandle} type="text" className="validate white-text " />
                                    <label htmlFor="Doseofmeditation">Address</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="cnum" type="text" onChange={this.changeHandle} className="validate white-text " />
                                    <label htmlFor="cnum">Contact Number</label>
                                </div>
                            </div>

                            <div className="center"><Link to="/hosdash" className="btn ">Submit</Link></div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUserProfile;
