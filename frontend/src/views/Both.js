import React from 'react';
import Image from '../components/elements/Image'
import { Link } from 'react-router-dom';


const Both =( props )=>{
  
  
  return(
    <>
    <section className="section center-content">
      <div className="hero-content mt-32">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              One Nation One Health<span className="text-color-primary">ID</span>
            </h1>
      </div>
    <div className="container">
        <div className="section-inner mt-0">
            <div className="split-wrap">
                <div className="split-item">
                    <div className="split-item-content center-content-mobile">
                        <h3 className="mt-0 mb-16">Hospital</h3>
                        <Image
                         className="has-shadow"
                         src={require('../assets/images/shiny-happy-people.png')}
                         alt="Hero"
                         width={270}
                         height={456} />
                        <button className="button button-primary m-32"><Link to="/hospital/login">SignIn</Link></button>
                        <button className="button button-secondary m-32"><Link to="/hospital/register">Register</Link></button>
                    </div>
                    
                    <div className="plit-item-content center-content-mobile">
                    <h3 className="mt-0 mb-16">Laboratory</h3>
                    <Image
                         className="has-shadow"
                         src={require('../assets/images/humaaans.png')}
                         alt="Hero"
                         width={200}
                         height={256} />
                        <button className="button button-primary m-32"><Link to="/lab/login">SignIn</Link></button>
                        <button className="button button-secondary m-32"><Link to="/lab/register">Register</Link></button>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Both;