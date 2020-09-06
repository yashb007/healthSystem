import React, { Component } from 'react';
import Image from '../components/elements/Image';
import Axios from 'axios';

class RegisterLab extends Component {

  state = {
    name: null,
    state: null,
    district: null,
    Tehsil: null,
    address: null,
    head: null,
    Contact: null,
    email: null,
    password: null,
    url : null,
    image:{}
  }

  changeHandle=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }


  uploadPic = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file",this.state.image)
    data.append("upload_preset","healthSystem")
    data.append("cloud_name","yashbansal")
    fetch("	https://api.cloudinary.com/v1_1/yashbansal/image/upload",{
      method:"POST",
      body:data
    }).then(res => res.json())
    .then(data=> {
      console.log(data.url)
      this.setState({url : data.url})
       
    console.log(this.state);
    console.log("123")
    Axios.post('http://localhost:8080/lab/signup',this.state)
        .then((res)=>{
          if(res.data.validation.errors.length > 0){
            console.log(res.data.validation.errors,67)
            alert(`err : ${res.data.validation.errors[0].msg}`);
          }else{
            console.log("1234")
            this.props.history.push("/lab/login"); 
          }
        }).catch((err)=>{
          console.log(err,45);
        }).catch(err => console.log(err))
      })}


  // submitHandle=(e)=>{
  //   e.preventDefault();
  //   console.log(this.state);
  //   console.log("123")
  //   this.uploadPic();
  //   Axios.post('http://localhost:8080/lab/signup',this.state)
  //       .then((res)=>{
  //         if(res.data.validation.errors.length > 0){
  //           console.log(res.data.validation.errors,67)
  //           alert(`err : ${res.data.validation.errors[0].msg}`);
  //         }else{
  //           console.log("1234")
  //           this.props.history.push("/lab/login"); 
  //         }
  //       }).catch((err)=>{
  //         console.log(err,45);
  //       })
  
render(){
  
  return (
    <>
      <section className="section center-content">
        <div className="container">
          <div className="section-inner">
            <div className="split-wrap invert-mobile invert-desktop">
              <div className="split-item">
                <div className="split-item-content center-content-mobile" style={{overflowY:"scroll",height:"28rem",overflowX:"hidden"}}>
                  <h3 className="mt-0 mb-16">Register</h3>
                  <p className="m-0">For Laboratory</p>
                  <form onSubmit={this.uploadPic}>
                      <fieldset>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="name">Laboratory Name</label>
                          <input id="name" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="Laboratory Name" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="head">Head Name</label>
                          <input id="head" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="Head name" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="email">Email</label>
                          <input id="email" onChange={this.changeHandle} className="form-input white-text" type="email" placeholder="Email" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input type="password" onChange={this.changeHandle} id="password" className="form-input white-text" placeholder="Password" />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="state">State</label>
                          <input id="state" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="State" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="district">District</label>
                          <input id="district" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="District" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="Tehsil">Tehsil</label>
                          <input id="Tehsil" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="Tehsil" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="address">Address</label>
                          <textarea id="address" onChange={this.changeHandle} className="form-input black-text" placeholder="Address"></textarea>
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="Contact">Contact Number</label>
                          <input type="number" onChange={this.changeHandle} id="Contact" className="form-input white-text" placeholder="Contact Number" />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="form-message">Photo</label>
                          <input type="file" id="form-message" className="form-input white-text" placeholder="Click to upload"
                             onChange={(e)=> {
                             console.log(e.target.files[0])
                             this.state.image = e.target.files[0]
                             console.log(this.state.image )
                            }}
                             />
                        </div>
                        <div className="mt-24">
                          <div className="button-group">
                            <button className="button button-primary">Submit</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                </div>
                <div className="split-item-image">
                  <Image
                    className="has-shadow"
                    src={require('../assets/images/lab.png')}
                    alt="Hostpital"
                    width={900}
                    height={700} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
}

export default RegisterLab;