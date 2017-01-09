import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
  componentWillMount() {
    this.props.fetchMessage(function(res) {
      
    });
  }
  render() {
    return (
      <div className="Profile">
        Profile
      </div>
    )
  }
}
export default connect(null, actions)(Profile);
