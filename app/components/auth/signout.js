import React, { Component } from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  render() {
    return (
      <div className="Signout">
        <h1 className="text-center">Hope to see you soon, good buddy.</h1>
      </div>
    )
  }
}
export default connect(null, actions)(Signout)
