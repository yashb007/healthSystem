import React from 'react';
import Image from '../components/elements/Image';
import RegisterForm from '../components/sections/RegisterForm';


const RegisterLab = (props) => {
  return (
    <>
      <section className="section center-content">
        <div className="container">
          <div className="section-inner">
            <div className="split-wrap invert-mobile invert-desktop">
              <div className="split-item">
                <div className="split-item-content center-content-mobile" style={{overflowY:"scroll",height:"28rem",overflowX:"hidden"}}>
                  <h3 className="mt-0 mb-16">Register</h3>
                  <p className="m-0">For Hospitals</p>
                  <RegisterForm />
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

export default RegisterLab;