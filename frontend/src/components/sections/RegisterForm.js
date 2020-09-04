import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {
  return (
    <form>
      <fieldset>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-name">Hospital Name</label>
          <input id="form-name" className="form-input" type="text" placeholder="Text placeholder" required />
        </div>
        <div className="mb-16">
          <label className="form-label" for="form-username">Username</label>
          <input id="form-username" className="form-input form-success" type="text" placeholder="Username" value="Cruip" required />
        </div>
        <div className="mb-16">
          <label className="form-label" for="form-email">Email</label>
          <input id="form-email" className="form-input form-error" type="email" placeholder="Email" value="hello@" required />
        </div>
        <div className="mb-16">
          <label className="form-label" for="form-color">Hospital Type</label>
          <select id="form-color" className="form-select">
            <option hidden>Select</option>
            <option>Private</option>
            <option>Goverment</option>
            <option>Semi-Goverment</option>
          </select>
        </div>
        <div className="mb-16">
          <label className="form-label" for="form-message">Message</label>
          <textarea id="form-message" className="form-input" placeholder="Textarea placeholder"></textarea>
        </div>
        <div className="mt-24">
          <div className="button-group">
            <button className="button button-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default RegisterForm;