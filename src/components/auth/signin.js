import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password)
  }
  render() {
    const { handleSubmit, fields: {email, password}} = this.props;
    return (
      <form className="Signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input id="SigninEmail" {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input id="SigninPassword" {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary SigninButtonSubmit">Sign In</button>
      </form>
    )
  }
}
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
