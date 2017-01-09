import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password})
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
    const { handleSubmit, fields: {email, password}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="Signin">
        <fieldset className="form-group emailInput">
          <label>Email:</label>
          <input type="text" className="form-control" {...email}/>
        </fieldset>
        <fieldset className="form-group passwordInput">
          <label>Password:</label>
          <input type="password" className="form-control" {...password}/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary SigninButtonSubmit">Sign In</button>
      </form>

    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
