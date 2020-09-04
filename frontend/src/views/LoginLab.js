import React from 'react';
import Image from '../components/elements/Image';
import LoginForm from '../components/sections/Login-form';


const LoginLab = (props) => {
  return (
    <>
      <section className="section center-content">
        <div className="container">
          <div className="section-inner">
            <div className="split-wrap invert-mobile invert-desktop">
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Login</h3>
                  <p className="m-0">For Laboratory</p>
                  <LoginForm />
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

export default LoginLab;