import React, { Component } from 'react';
import { Link } from 'react-router'
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light Header">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Sign Out</Link>
          </li>
          <li className="nav-item">
            Status
          </li>
        </ul>
      </nav>
    )
  }
}
export default Header;
