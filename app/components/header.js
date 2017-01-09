import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
class Header extends Component {
  renderSigninButton() {
    if (!this.props.authenticated) {
      return (
        [<li className="nav-item" key={0}>
          <Link to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={1}>
          <Link to="/signup">Sign Up</Link>
        </li>]
      )
    }
  }
  renderProfileButton() {
    if (this.props.authenticated) {
      return (
        [
          <li className="nav-item" key={1}>
            <Link to="/profile">Profile</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link to="/signout">Sign Out</Link>
          </li>
      ]
      )
    }
  }
  render() {
    return (
      <nav className="navbar navbar-light Header">
        <ul className="nav navbar-nav">
          {this.renderSigninButton()}
          {this.renderProfileButton()}
        </ul>
      </nav>
    )
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header);
