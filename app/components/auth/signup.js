import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps){
    this.props.signupUser(formProps)
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger Error">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const {handleSubmit, fields: {email, password2, password}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="Signup">
        <fieldset className="form-group">
          <label>Email:</label>
          <input type="text" {...email} className="form-control SignupEmailInput"/>
          {email.error && email.touched && <div className="Error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" {...password} className="form-control SignupPasswordInput1"/>
          {password.error && password.touched && <div className="Error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password (Confirm):</label>
          <input type="password" {...password2} className="form-control SignupPasswordInput2"/>
          {password2.error && password2.touched && <div className="Error">{password2.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary SubmitSignupButton">Sign Up</button>
      </form>

    )
  }
}

function validate(formProps) {
  const errors = {};
  const check_fields = [formProps.email,formProps.password,formProps.password2]
  let x = 0;
  check_fields.map(res=>{
    if (!res) {
      switch (x) {
        case 0:
          errors.email="Please Enter an Email"
          break;
        case 1:
          errors.password="Please Enter an Password"
          break;
        case 2:
          errors.password2="Please Enter an Password"
          break;
      }
    }
    x+=1
  })
  if (formProps.password !== formProps.password2) {
    errors.password = 'Passwords Must Match';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}
export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'password2'],
  validate
}, mapStateToProps, actions)(Signup);
