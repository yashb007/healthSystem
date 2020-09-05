import React, { Component } from 'react';
import Image from '../components/elements/Image';
import axios from 'axios';

class Login extends Component {

state={
  email:null,
  password:null
}

changeHandle=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
}

SubmitHandle=(e)=>{
  e.preventDefault();
  console.log(this.state);
  axios.post('http://localhost:8080/hsp/login',this.state).then((res)=>{
    if(res.data.login){
      console.log(this.props);
      this.props.history.push("/hospital/dashboard")
    }

  })
  .catch((err)=>{
    console.log(err);
  });
}


  render(){
  return (
    <>
      <section className="section center-content">
        <div className="container">
          <div className="section-inner">
            <div className="split-wrap invert-mobile invert-desktop">
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Login</h3>
                  <p className="m-0">For Hospitals</p>
                  <form  onSubmit={this.SubmitHandle}>
                    <fieldset>
                      <div className="mb-16">
                        <label className="form-label" htmlFor="email">Email</label>
                        <div className="has-icon-left">
                          <input className="form-input" id="email" type="text" placeholder="Username" onChange={this.changeHandle}/>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" fill="#909CB5" />
                          </svg>
                        </div>
                      </div>
                      <div className="mb-16">
                        <label className="form-label" htmlFor="password">Password</label>
                        <div className="has-icon-left">
                          <input className="form-input" id="password" type="password" placeholder="Password" onChange={this.changeHandle}/>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" fill="#909CB5" />
                          </svg>
                        </div>
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
                    src={require('../assets/images/hos_blue.png')}
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

export default Login;